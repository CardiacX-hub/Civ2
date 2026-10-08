#ifndef KAW_SURFACE_PBR
#define KAW_SURFACE_PBR
// Engine-neutral HLSL include. Evaluate in LINEAR space. Supply tangent-space
// normal mapping and engine shadow/GI attenuation before/after this function.
static const float KAW_PI=3.14159265;
float3 KawFresnel(float cosTheta,float3 f0){return f0+(1-f0)*pow(1-saturate(cosTheta),5);}
float3 KawDirectBRDF(float3 albedo,float metallic,float roughness,float3 N,float3 V,float3 L,float3 radiance){
 float3 H=normalize(V+L);float nl=saturate(dot(N,L)),nv=max(.0001,saturate(dot(N,V))),nh=saturate(dot(N,H));
 float a=max(.04,roughness);a*=a;float a2=a*a,d=nh*nh*(a2-1)+1;
 float D=a2/max(.0001,KAW_PI*d*d),k=(roughness+1)*(roughness+1)/8;
 float G=nv/(nv*(1-k)+k)*nl/max(.0001,nl*(1-k)+k);
 float3 F=KawFresnel(dot(H,V),lerp(.04,albedo,saturate(metallic)));
 float3 specular=D*G*F/max(.0001,4*nv*nl);
 return ((1-F)*(1-metallic)*albedo/KAW_PI+specular)*radiance*nl;
}
// Readability accent: keep strength <= .15, and apply before tone mapping.
float3 KawRim(float3 N,float3 V,float3 color,float strength,float power){return color*strength*pow(1-saturate(dot(N,V)),max(1,power));}
// Thin-surface approximation only. Real skin SSS requires thickness/profile
// buffers and a diffusion pass; this function is suitable for leaves/reeds.
float3 KawThinScatter(float3 albedo,float3 N,float3 L,float thickness,float strength){return albedo*saturate(dot(-N,L))*exp(-max(0,thickness))*strength;}
void KawWetSurface(inout float3 albedo,inout float roughness,float wetness){wetness=saturate(wetness);albedo*=1-.12*wetness;roughness=lerp(roughness,max(.08,roughness*.45),wetness);}
float3 KawTerrainBlend(float3 grass,float3 dirt,float3 rock,float slope,float pathMask){return lerp(lerp(grass,dirt,saturate(pathMask)),rock,smoothstep(.35,.75,slope));}
#endif

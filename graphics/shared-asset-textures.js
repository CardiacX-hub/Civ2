/** Content-addressed sharing retains exact embedded pixels and UV/sampler settings.
 * Material palettes remain independent. Only byte-identical textures are shared. */
export async function shareAssetTextures(gltf,pool,isDisposed=()=>false){
 const parser=gltf.parser;if(!parser?.associations||!globalThis.crypto?.subtle)return;
 const materials=new Set(),textures=new Set();gltf.scene.traverse(o=>{if(o.isMesh)for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);for(const v of Object.values(m))if(v?.isTexture)textures.add(v);}});
 const candidates=await Promise.all([...textures].map(async texture=>{const index=parser.associations.get(texture)?.textures,source=parser.json.textures?.[index]?.source,image=parser.json.images?.[source];if(image?.bufferView===undefined)return null;const bytes=await parser.getDependency('bufferView',image.bufferView),digest=await crypto.subtle.digest('SHA-256',bytes),hash=[...new Uint8Array(digest)].map(v=>v.toString(16).padStart(2,'0')).join('');const settings=[texture.colorSpace,texture.channel,texture.wrapS,texture.wrapT,texture.magFilter,texture.minFilter,texture.flipY,texture.offset.toArray(),texture.repeat.toArray(),texture.center.toArray(),texture.rotation];return {texture,key:hash+JSON.stringify(settings)};}));
 if(isDisposed())return;const replacements=new Map(),discarded=new Set();for(const item of candidates){if(!item)continue;const canonical=pool.get(item.key);if(canonical){replacements.set(item.texture,canonical);discarded.add(item.texture);}else pool.set(item.key,item.texture);}
 for(const m of materials)for(const [key,value]of Object.entries(m))if(replacements.has(value))m[key]=replacements.get(value);
 const retainedImages=new Set([...pool.values()].map(t=>t.image));for(const texture of discarded){texture.dispose();if(!retainedImages.has(texture.image))texture.image?.close?.();}
}

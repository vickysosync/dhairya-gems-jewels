declare module "*.asset.json" {
  const asset: { url: string; original_filename: string };
  export default asset;
}

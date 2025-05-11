import fs from "fs/promises";
import path from "path";

export async function copyAssetsToPublic(folder: string) {
    const from = path.join(process.cwd(), "content", "posts", folder);
    const to = path.join(process.cwd(), "public", "posts", folder);

    await fs.mkdir(to, { recursive: true });
    const entries = await fs.readdir(from);

    await Promise.all(
        entries
            .filter((f) => /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(f))
            .map((file) => fs.copyFile(path.join(from, file), path.join(to, file)))
    );
}
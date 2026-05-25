import { cacheLife } from "next/cache";
import { getTopCollections } from "@/lib/vendure/cached";
import Image from "next/image";
import Link from "next/link";

async function Copyright() {
  "use cache";
  cacheLife("days");

  return <div>© {new Date().getFullYear()} Stitched. All rights reserved.</div>;
}

export async function Footer() {
  "use cache";
  cacheLife("days");

  const collections = await getTopCollections();

  return (
    <footer className="border-t-4 border-[#8f4f53] mt-auto bg-[#fffaf8]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-sm font-semibold mb-4 uppercase tracking-wider text-[#8f4f53]">
              Stitched
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4 text-[#6d7659]">
              Categories
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {collections.map((collection) => (
                <li key={collection.id}>
                  <Link
                    href={`/collection/${collection.slug}`}
                    className="hover:text-[#8f4f53] transition-colors"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#9a6b4c]">
              Stitched
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="/search"
                  className="hover:text-[#8f4f53] transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="hover:text-[#8f4f53] transition-colors"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="/account/profile"
                  className="hover:text-[#8f4f53] transition-colors"
                >
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t-2 border-[#e7eadf] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <Copyright />
          <div className="flex items-center gap-2">
            <Image
              src="/stitched-brand.png"
              alt="Stitched"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="text-[#6d7659]">By hand, made with love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

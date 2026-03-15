import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={props?.value?.alt || ""}
          width={600}
          height={400}
        />
      ) : null,
  },

  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => <em className="">{children}</em>,
    u: ({ children }) => <u className="underline">{children}</u>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li className="marker:text-sage">{children}</li>,
    number: ({ children }) => <li className="marker:text-sage">{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-serif font-bold mt-12 mb-6 leading-tight -tracking-[0.025em]">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="mt-12 mb-6 text-forest font-serif">{children}</h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-forest font-serif">{children}</h3>
    ),

    h4: ({ children }) => (
      <h4 className="text-xl font-medium -tracking-[0.025em] mt-6 mb-3 font-serif">
        {children}
      </h4>
    ),

    h5: ({ children }) => (
      <h5 className="text-lg font-medium -tracking-[0.025em] mt-5 mb-2 font-serif">
        {children}
      </h5>
    ),

    h6: ({ children }) => (
      <h6 className="text-base font-medium -tracking-[0.025em] mt-4 mb-2 font-serif uppercase">
        {children}
      </h6>
    ),

    normal: ({ children }) => <p className="mb-6 text-forest/90">{children}</p>,

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic my-6 text-gray-600">
        {children}
      </blockquote>
    ),
  },
};

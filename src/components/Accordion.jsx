import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export default function save({
  attributes: { open, startOpen, accordionHeading, bgGrey },
  setAttributes,
}) {
  const blockProps = useBlockProps.save({
    className: `accordion ${bgGrey && "grey"}`,
  });
  const onAccordionClick = (event) => {
    // console.log(event);
  };
  return (
    <div {...blockProps}>
      <RichText.Content
        value={accordionHeading}
        className={`${
          startOpen
            ? "accordion-header start-open active test"
            : "accordion-header"
        }`}
        tagName="h2"

        // asdasdasd
      />
      <div
        className={`${
          startOpen
            ? "accordion-content start-open active"
            : "accordion-content"
        }`}
      >
        <InnerBlocks.Content />
      </div>
    </div>
  );
}

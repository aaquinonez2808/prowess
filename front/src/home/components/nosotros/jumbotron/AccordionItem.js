const AccordionItem = ({ id, headingId, icon, title, text }) => {
  return (
    <>
      <div class="accordion-item">
        <h2 class="accordion-header" id={headingId}>
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + id}
            aria-expanded="true"
            aria-controls={id}
          >
            {icon} {title}
          </button>
        </h2>
        <div
          id={id}
          class="accordion-collapse collapse show"
          aria-labelledby={headingId}
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">{text}</div>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;

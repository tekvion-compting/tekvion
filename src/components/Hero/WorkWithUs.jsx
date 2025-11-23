import { useState } from "react";
import WorkWithUsModal from "../Form/WorkWithUsModal";

export default function WorkWithUsButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="hero-btn" onClick={() => setOpen(true)}>
        Work With Us
      </button>

      {open && <WorkWithUsModal onClose={() => setOpen(false)} />}
    </>
  );
}


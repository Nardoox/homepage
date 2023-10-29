import Uebersicht from "@/components/uebersichtComponents/uebersicht/page";
import { Divider } from "@nextui-org/react";

export default function InformationPage() {
  return (
    <>
      <div className="platzhalter" />
      <section className="uebersichtSection">
        <div className="uebersichtSection__nav">
          <Uebersicht />
        </div>
        <div className="uebersichtSection__profileContent">
          <ul className="uebersichtSection__profileContent__List uebersichtSection__profileContent__List__x">
            <li>
              <h2>Dein Paket</h2>
              <p>Standart...</p>
            </li>
            <Divider className="my-4" />
            <li>
              <h2>Addons...</h2>
              <p>1...2...3...4...5...</p>
            </li>
            <Divider className="my-4" />
            <li>
              <h2>Preis</h2>
              <p>...$</p>
            </li>
            <Divider className="my-4" />
            <li>
              <h2>Bezahlt</h2>
              <p>.../...</p>
            </li>
            <Divider className="my-4" />
            <li>
              <h2>Beschreibung deines Projektes</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic
                dolor dolores? Voluptates rerum unde quibusdam laboriosam modi
                minima error? At omnis iure magnam atque incidunt nostrum eos
                repellat accusamus.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

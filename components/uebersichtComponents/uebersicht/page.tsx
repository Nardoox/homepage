import { Divider } from "@nextui-org/react";

export default function Uebersicht() {
  return (
    <>
      <section className="overview">
        <div className="overview__menu">
          <ul>
            <li>
              <a href="/profile">Profil</a>
            </li>
            <Divider className="my-4" />
            <li>
              <a href="/status">Status deines projekts</a>
            </li>
            <Divider className="my-4" />
            <li>
              <a href="/informationen">Informationen über dein Projekt</a>
            </li>
            <Divider className="my-4" />
            <li>
              <a href="/support">Support</a>
            </li>
            <Divider className="my-4" />
            <li>
              <a href="/erweiterungen">Erweiterungen</a>
            </li>
          </ul>
        </div>
        <div className="overview__content"></div>
      </section>
    </>
  );
}

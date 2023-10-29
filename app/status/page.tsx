import Uebersicht from '@/components/uebersichtComponents/uebersicht/page';
import React from 'react';
import { Progress, Image } from "@nextui-org/react";

export default function StatusPage() {
  return (
    <>
      <div className="platzhalter" />
      <section className="uebersichtSection">
        <div className="uebersichtSection__nav">
          <Uebersicht />
        </div>
        <div className="uebersichtSection__profileContent">
          <div className="stauts__description">
            <h2>Status deines Projektes</h2>
            <p>
              Hier kannst du sehen wie weit wir mit deinem Projekt vorankommen
            </p>
          </div>
          <div className="status__img">
            <Progress aria-label="Loading..." value={60} className="max-w-md" />
            <Image
              isBlurred
              width={840}
              src="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
              alt="Läd..."
            />
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { User } from "@nextui-org/react";
import Uebersicht from "@/components/uebersichtComponents/uebersicht/page";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    <>
      <div className="platzhalter" />
      <section className="uebersichtSection">
        <div className="uebersichtSection__nav">
          <Uebersicht />
        </div>
        <div className="uebersichtSection__profileContent">
          {user && (
            <ul className="uebersichtSection__profileContent__List">
              <li className="uebersichtSection__profileContent__User">
                <User
                  name={user.name ?? ""}
                  description={user.email ?? ""}
                  avatarProps={{
                    src: user.picture ?? "",
                  }}
                />
              </li>
              <li>
                <h2>Name</h2>
                <p>{user.name}</p>
              </li>
              <li>
                <h2>Email</h2>
                <p>{user.email}</p>
              </li>
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

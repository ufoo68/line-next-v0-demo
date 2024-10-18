import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import { ProfilePage } from "@/components/profile-page";
import { useEffect, useState } from "react";

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError
}) => {
  const [displayName, setDisplayName] = useState<string | undefined>();
  const [statusMessage, setStatusMessage] = useState<string | undefined>();
  const [pictureUrl, setPictureUrl] = useState<string | undefined>();
  useEffect(() => {
    if (liff) {
      liff.getProfile()
        .then((profile) => {
          setDisplayName(profile.displayName);
          setStatusMessage(profile.statusMessage);
          setPictureUrl(profile.pictureUrl);
        })
        .catch((error: Error) => {
          console.log("LIFF getProfile failed.", error.toString());
        });
    }
  }, []);
  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProfilePage displayName={displayName} statusMessage={statusMessage} pictureUrl={pictureUrl} />
      </main>
    </div>
  );
};

export default Home;

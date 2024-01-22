import { useState } from "react";
import {
  DifferencesSection,
  Header,
  IntroSection,
  TabSection,
  TeachingSection,
} from "./component";
import FreedBackSeption from "./component/FreedBackSeption/FreedBackSeption";

function App() {
  const [tab, setTab] = useState("feedback");

  const active = () =>{
    setTab (active)
  }
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabSection active={tab} onChanch={ setTab} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === 'feedback' && (
          <>
            <FreedBackSeption />
          </>
        )}
      </main>
    </>
  );
}

export default App;

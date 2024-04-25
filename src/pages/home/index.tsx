import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Section 1 */}
      <div
        id="#home"
        className="w-full h-full">
        <Section1 />
      </div>

      {/* Section 2 */}
      <div
        id="#about"
        className="w-full h-full">
        <Section2 />
      </div>

      {/* Section 3 */}
      <div
        id="#"
        className="w-full h-full">
        <Section3 />
      </div>

      {/* Section 4 */}
      <div
        id="#mission"
        className="w-full h-full">
        <Section4 />
      </div>

      {/* Section 5 */}
      <div
        id="#future"
        className="w-full h-full">
        <Section5 />
      </div>

      {/* Section 6 */}
      <div
        id="#branches"
        className="w-full h-full">
        <Section6 />
      </div>

    </div>
  )
}

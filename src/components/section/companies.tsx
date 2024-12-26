import { icons } from "@/utils/constant";
import { Container } from "../container";
import { Marquee } from "../marquee";

export function Companies() {
  return (
    <>
      <Container>
        <p className="text-md text-center text-grey font-medium">
          Supported By
        </p>

        <Marquee className="flex items-center max-w-[70rem] mx-auto my-5 overflow-hidden  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <div className="flex animate-infinite-scroll [--animation-delay:50s]">
            {icons.map((icon) => (
              <div key={icon.id} className=" flex items-center mx-8 max-w-none">
                <icon.component className="w-auto h-auto" />
              </div>
            ))}
            {icons.map((icon) => (
              <div key={icon.id} className=" flex items-center mx-8 max-w-none">
                <icon.component className="w-auto h-auto" />
              </div>
            ))}
          </div>
        </Marquee>
      </Container>
    </>
  );
}

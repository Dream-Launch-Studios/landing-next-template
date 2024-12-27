import { Container } from "@/components/container";
import {
  FeatureHighlight,
  FeaturePara,
  FeatureSubTitle,
  FeatureTitle,
} from "./features-content";
import { featureList } from "@/utils/constant";
import { cn } from "@/utils/utils";

export function Features() {
  return (
    <>
      <Container className="py-16 flex flex-col gap-y-6">
        <div className="space-y-2">
          <FeatureHighlight className="text-transparent bg-brand bg-clip-text font-bold">
            Built for growth
          </FeatureHighlight>
          <FeatureTitle>Take your startup farther, faster</FeatureTitle>
          <FeaturePara className="max-w-7xl text-primary-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
            nostrum aut. Eaque quasi, reprehenderit nostrum, sunt numquam
            commodi officiis minus, nesciunt maiores assumenda maxime id eius
            quas architecto qui expedita.
          </FeaturePara>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {featureList.map((list, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-primary p-5 flex flex-col space-y-5 h-[60rem]",
                idx === 0 || idx === 2 ? "mt-14" : ""
              )}
            >
              <div className="border border-transparent-white h-[90%] w-full"></div>
              <div>
                <FeatureSubTitle className="text-lg">
                  {list.title}
                </FeatureSubTitle>
                <FeaturePara>{list.content}</FeaturePara>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

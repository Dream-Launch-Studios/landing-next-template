import { exampleTweets } from "@/lib/constant";
import { TweetGrid } from "../ui/tweet-grid";
import { Container } from "../container";

export function Testimonial() {
  return (
    <>
      <Container className="mask-gradient-opacity py-16">
        <h3 className="text-4xl font-semibold text-center mb-5">
          Loved By many
        </h3>
        <div className="pb-12 md:max-w-4xl max-w-md mx-auto">
          <div className="flex w-full justify-center pb-12">
            <p>Join the club</p>
          </div>
          <div className="flex items-center justify-center w-full">
            <TweetGrid
              className="w-80 md:w-full "
              tweets={exampleTweets}
              columns={2}
              spacing="lg"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

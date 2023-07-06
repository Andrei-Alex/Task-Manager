import { setupWorker, rest } from "msw";
import { IAuthRequest, ILoginTestResponse } from ".";

const worker = setupWorker(
  rest.post<IAuthRequest, ILoginTestResponse>(
    "/login",
    async (req, res, ctx) => {
      const { username } = await req.json();

      return res(
        ctx.json({
          username: "Johny",
        })
      );
    }
  )
);

worker.start();

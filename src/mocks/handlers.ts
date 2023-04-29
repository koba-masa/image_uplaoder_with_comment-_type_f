import { rest } from 'msw';

export const handlers = [
  rest.get('/api//groups/sample_uid/images/', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        files: [
          {
            id: 1,
            memo: 'iamge_001',
            path: 'https://placehold.jp/150x150.png',
          },
          {
            id: 2,
            memo: 'iamge_001',
            path: 'https://placehold.jp/150x150.png',
          },
        ],
      }),
    );
  }),
];

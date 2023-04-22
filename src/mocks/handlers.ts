import { rest } from 'msw'

export const handlers = [
  rest.get('/groups/sample_uid/images/', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        files: [
          {image: '/files/sample_uid/image_001.jpg'},
          {image: '/files/sample_uid/image_002.jpg'}
        ]
      })
    )
  }),
]

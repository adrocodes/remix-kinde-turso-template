# Remix + Kinde + Turso Template

This is a [Remix](https://remix.run) project bootstrapped with [`create-react-router`](https://reactrouter.com/start/framework/installation).

## Features

1. Tailwind configured.
2. Kinde integration.
3. Drizzle configured with Turso provider.
4. Kinde `user.created` webhook configured to create a user in the database.

## Environment Variables

Copy the `.env.example` to a `.env.development` file. Your values will be found on the Kinde & Turso platforms. More information below.

### Drizzle Note

You want to also copy the Turso specific environment variables to a `.env` file. This is to allow for the various Drizzle commands to work properly.

## Kinde

### Learn more

To learn more about Kinde, take a look at the following resources:

- [Kinde Documentation](https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/)
- [Kinde Webhooks](https://docs.kinde.com/integrate/webhooks/webhooks-nextjs/)

### How to configure

When creating your project, you'll be presented with your environment values, copy & paste them into your `.env.development` file.

The only "private" route set up is `/dashboard`. If you want to redirect to this route after a user logs in, make sure you update your `KINDE_POST_LOGIN_REDIRECT_URL` environment variable.

### Webhooks

For the `user.created` webhook, you'll need to set up [ngrok](https://ngrok.com/) to tunnel your localhost to the internet. You can then use the ngrok URL to set up the webhook on the Kinde platform.

- URL: `{Ngrok URL}/api/v1/kinde/webhook/user.created`
- Event: `user.created`

If you update your `User` schema, you might have to update the webhook to populate the data correctly.

### Route protection

A custom Kinde [layout]() has been configured to protect routes using the `protectRoute` utility. You can read about that in the `kinde/ui/protected-layout.tsx` file.

### `getAppUser` helper

This custom helper combines the `getUser` method from Kinde and a database lookup to get the user from the database. This will add a `turso` object to the user object that will contain Turso user data. Currently only the `id` is added, but you can add more fields if you want.

## Drizzle & Turso

### Learn more

To learn more about Drizzle, take a look at the following resources:

- [Drizzle Documentation](https://orm.drizzle.team/docs/overview)
- [Turso Documentation](https://docs.turso.tech/introduction)

### Schemas

You can create mutltiple schema files under the `app/models` folder, drizzle is configured to look for these files and create the tables in the database.

### Workflow

1. Create a schema file under `app/models`.
2. Run `pnpm db:generate` to generate the migration files.
3. Run `pnpm db:migrate` to run the migrations.
4. View your database using Drizzle Studio using `pnpm db:studio`.

## Project structure

The project follows [Module Driven Development](https://papers.adro.codes/module-driven-development) for the project structure, with a couple of modules already set up for the various parts of the template. Modules in this project is under `app/core`.

---

## Bootstrapped README

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

### Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

### Getting Started

#### Installation

Install the dependencies:

```bash
npm install
```

#### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Building for Production

Create a production build:

```bash
npm run build
```

### Deployment

#### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

#### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

### Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

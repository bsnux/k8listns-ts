# k8listns-ts

Simple example for using [TypeScript](https://www.typescriptlang.org/) for
accessing to [Kubernetes](https://kubernetes.io).

This script displays namespaces names for default configured context.

We assuming you have a valid `~/.kube/config` file and access to given
Kubernentes cluster.

## Setup

Installing dependencies for development and building

```
$ npm install
```

## Compiling and running

Compiling:

```
$ npm run build

```
Running the script:

```
$ npm run start
```

## JS code generation

Creating standalone with no dependencies and ready to distribute and run with
`node`:

```
$ npm run bundle
```

## Usage

Execute JS code with no dependencies:

```
node dist/index.js
```

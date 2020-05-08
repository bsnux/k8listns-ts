/**
 * Printing out all namespaces names in configured default context
 */
import k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();

// Loading ~/.kube/config by default
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

k8sApi.listNamespace()
  .then((res) => {
    for(let ns of res.body.items) {
      console.log(ns.metadata?.name);
    }
});
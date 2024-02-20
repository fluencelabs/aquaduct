/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */


// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const helloWorldRemote_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (xor
    (seq
     (seq
      (call -relay- ("op" "concat_strings") ["Hello, " -name-arg-] ret)
      (call -relay- ("op" "concat_strings") [ret "! From "] ret-0)
     )
     (call -relay- ("op" "concat_strings") [ret-0 -relay-] ret-1)
    )
    (fail :error:)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret-1])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function helloWorldRemote(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorldRemote",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorldRemote_script
    );
}

export const showSubnet_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (new $services
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (new %Deals_obj_map
            (seq
             (ap ("myDeployment" []) %Deals_obj_map)
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
           (ap Deals_obj.$.myDeployment Deals_obj_flat)
          )
          (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
         )
         (xor
          (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
          (fail :error:)
         )
        )
        (new -if-error-
         (xor
          (seq
           (match ret.$.success false
            (seq
             (new $array-inline
              (seq
               (seq
                (ap "Failed to resolve subnet: " $array-inline)
                (ap ret.$.error $array-inline)
               )
               (canon %init_peer_id% $array-inline  #array-inline-0)
              )
             )
             (call %init_peer_id% ("run-console" "print") [#array-inline-0])
            )
           )
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
          )
          (seq
           (seq
            (ap :error: -if-error-)
            (xor
             (seq
              (match :error:.$.error_code 10001
               (null)
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (fail -if-error-)
            )
           )
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
          )
         )
        )
       )
       (fold ret.$.workers w-0
        (seq
         (new -if-else-error-
          (new -else-error-
           (new -if-error-
            (xor
             (mismatch w-0.$.worker_id []
              (new $services_aliases
               (new $spells_aliases
                (xor
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (new $-ephemeral-stream-
                          (new #-ephemeral-canon-
                           (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                          )
                         )
                         (new $-ephemeral-stream-
                          (new #-ephemeral-canon-
                           (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                          )
                         )
                        )
                        (call w-0.$.worker_id.[0] ("srv" "list") [] ret-0)
                       )
                       (fold ret-0 s-0
                        (seq
                         (seq
                          (seq
                           (seq
                            (ap s-0.$.aliases s-0_flat)
                            (ap s-0_flat s-0_flat_to_functor)
                           )
                           (ap s-0_flat_to_functor.length s-0_flat_length)
                          )
                          (new -if-error-
                           (xor
                            (mismatch s-0_flat_length 0
                             (seq
                              (new -if-error-
                               (xor
                                (match s-0.$.service_type "spell"
                                 (ap s-0.$.aliases.[0] $spells_aliases)
                                )
                                (seq
                                 (ap :error: -if-error-)
                                 (xor
                                  (match :error:.$.error_code 10001
                                   (null)
                                  )
                                  (fail -if-error-)
                                 )
                                )
                               )
                              )
                              (new -if-error-
                               (xor
                                (match s-0.$.service_type "service"
                                 (ap s-0.$.aliases.[0] $services_aliases)
                                )
                                (seq
                                 (ap :error: -if-error-)
                                 (xor
                                  (match :error:.$.error_code 10001
                                   (null)
                                  )
                                  (fail -if-error-)
                                 )
                                )
                               )
                              )
                             )
                            )
                            (seq
                             (ap :error: -if-error-)
                             (xor
                              (match :error:.$.error_code 10002
                               (null)
                              )
                              (fail -if-error-)
                             )
                            )
                           )
                          )
                         )
                         (next s-0)
                        )
                        (null)
                       )
                      )
                      (par
                       (new $option-inline
                        (seq
                         (xor
                          (seq
                           (canon w-0.$.worker_id.[0] $services_aliases  #push-to-stream-103)
                           (ap #push-to-stream-103 $option-inline)
                          )
                          (null)
                         )
                         (canon w-0.$.worker_id.[0] $option-inline  #option-inline-0)
                        )
                       )
                       (new $option-inline-1
                        (seq
                         (xor
                          (seq
                           (canon w-0.$.worker_id.[0] $spells_aliases  #push-to-stream-108)
                           (ap #push-to-stream-108 $option-inline-1)
                          )
                          (null)
                         )
                         (canon w-0.$.worker_id.[0] $option-inline-1  #option-inline-1-0)
                        )
                       )
                      )
                     )
                     (new %WorkerServices_obj_map
                      (seq
                       (seq
                        (seq
                         (seq
                          (ap ("host_id" w-0.$.host_id) %WorkerServices_obj_map)
                          (ap ("services" #option-inline-0) %WorkerServices_obj_map)
                         )
                         (ap ("spells" #option-inline-1-0) %WorkerServices_obj_map)
                        )
                        (ap ("worker_id" w-0.$.worker_id) %WorkerServices_obj_map)
                       )
                       (canon w-0.$.worker_id.[0] %WorkerServices_obj_map  WorkerServices_obj)
                      )
                     )
                    )
                    (ap WorkerServices_obj $services)
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (seq
                  (seq
                   (seq
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (fail :error:)
                 )
                )
               )
              )
             )
             (seq
              (ap :error: -if-error-)
              (xor
               (match :error:.$.error_code 10002
                (seq
                 (new %WorkerServices_obj-0_map
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("host_id" w-0.$.host_id) %WorkerServices_obj-0_map)
                      (ap ("services" []) %WorkerServices_obj-0_map)
                     )
                     (ap ("spells" []) %WorkerServices_obj-0_map)
                    )
                    (ap ("worker_id" []) %WorkerServices_obj-0_map)
                   )
                   (canon %init_peer_id% %WorkerServices_obj-0_map  WorkerServices_obj-0)
                  )
                 )
                 (ap WorkerServices_obj-0 $services)
                )
               )
               (seq
                (seq
                 (ap :error: -else-error-)
                 (xor
                  (match :error:.$.error_code 10001
                   (ap -if-error- -if-else-error-)
                  )
                  (ap -else-error- -if-else-error-)
                 )
                )
                (fail -if-else-error-)
               )
              )
             )
            )
           )
          )
         )
         (next w-0)
        )
        (null)
       )
      )
      (canon %init_peer_id% $services  #-services-fix-0)
     )
     (ap #-services-fix-0 -services-flat-0)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [-services-flat-0])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function showSubnet(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "showSubnet",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "WorkerServices",
                        "fields": {
                            "host_id": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "services": {
                                "type": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "spells": {
                                "type": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "worker_id": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        showSubnet_script
    );
}

export const getInfo_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (xor
    (call -relay- ("peer" "identify") [] ret)
    (fail :error:)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret -relay-])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function getInfo(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "getInfo",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "Info",
                    "fields": {
                        "node_version": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "spell_version": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "external_addresses": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "allowed_binaries": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "air_version": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "struct"
                },
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        getInfo_script
    );
}

export const runDeployedServices_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (new $answers
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (new %Deals_obj_map
            (seq
             (ap ("myDeployment" []) %Deals_obj_map)
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
           (ap Deals_obj.$.myDeployment Deals_obj_flat)
          )
          (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
         )
         (xor
          (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
          (fail :error:)
         )
        )
        (new -if-error-
         (xor
          (match ret.$.success false
           (seq
            (new $array-inline
             (seq
              (seq
               (ap "Failed to resolve subnet: " $array-inline)
               (ap ret.$.error $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (call %init_peer_id% ("run-console" "print") [#array-inline-0])
           )
          )
          (seq
           (ap :error: -if-error-)
           (xor
            (match :error:.$.error_code 10001
             (null)
            )
            (fail -if-error-)
           )
          )
         )
        )
       )
       (fold ret.$.workers w-0
        (seq
         (new -if-else-error-
          (new -else-error-
           (new -if-error-
            (xor
             (match w-0.$.worker_id []
              (seq
               (new %Answer_obj_map
                (seq
                 (seq
                  (ap ("answer" []) %Answer_obj_map)
                  (ap ("worker" w-0) %Answer_obj_map)
                 )
                 (canon %init_peer_id% %Answer_obj_map  Answer_obj)
                )
               )
               (ap Answer_obj $answers)
              )
             )
             (seq
              (ap :error: -if-error-)
              (xor
               (match :error:.$.error_code 10001
                (xor
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $-ephemeral-stream-
                         (new #-ephemeral-canon-
                          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                         )
                        )
                        (new $-ephemeral-stream-
                         (new #-ephemeral-canon-
                          (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                         )
                        )
                       )
                       (call w-0.$.worker_id.[0] ("myService" "greeting") ["fluence"] ret-0)
                      )
                      (new $option-inline
                       (seq
                        (xor
                         (ap ret-0 $option-inline)
                         (null)
                        )
                        (canon w-0.$.worker_id.[0] $option-inline  #option-inline-0)
                       )
                      )
                     )
                     (new %Answer_obj-0_map
                      (seq
                       (seq
                        (ap ("answer" #option-inline-0) %Answer_obj-0_map)
                        (ap ("worker" w-0) %Answer_obj-0_map)
                       )
                       (canon w-0.$.worker_id.[0] %Answer_obj-0_map  Answer_obj-0)
                      )
                     )
                    )
                    (ap Answer_obj-0 $answers)
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (seq
                  (seq
                   (seq
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (fail :error:)
                 )
                )
               )
               (seq
                (seq
                 (ap :error: -else-error-)
                 (xor
                  (match :error:.$.error_code 10001
                   (ap -if-error- -if-else-error-)
                  )
                  (ap -else-error- -if-else-error-)
                 )
                )
                (fail -if-else-error-)
               )
              )
             )
            )
           )
          )
         )
         (next w-0)
        )
        (null)
       )
      )
      (canon %init_peer_id% $answers  #-answers-fix-0)
     )
     (ap #-answers-fix-0 -answers-flat-0)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [-answers-flat-0])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function runDeployedServices(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "runDeployedServices",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Answer",
                        "fields": {
                            "answer": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            },
                            "worker": {
                                "name": "Worker",
                                "fields": {
                                    "host_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "pat_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "worker_id": {
                                        "type": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "tag": "option"
                                    }
                                },
                                "tag": "struct"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        runDeployedServices_script
    );
}

export const helloWorld_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (call %init_peer_id% ("op" "concat_strings") ["Hello, " -name-arg-] ret)
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function helloWorld(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorld",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorld_script
    );
}

export const getInfos_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "peers") [] -peers-arg-)
   )
   (new $infos
    (seq
     (seq
      (fold -peers-arg- p-0
       (seq
        (xor
         (seq
          (seq
           (seq
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
            (call p-0 ("peer" "identify") [] ret)
           )
           (ap ret $infos)
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (seq
          (seq
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
          )
          (fail :error:)
         )
        )
        (next p-0)
       )
       (null)
      )
      (canon %init_peer_id% $infos  #-infos-fix-0)
     )
     (ap #-infos-fix-0 -infos-flat-0)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [-infos-flat-0])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function getInfos(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "getInfos",
    "arrow": {
        "domain": {
            "fields": {
                "peers": {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Info",
                        "fields": {
                            "node_version": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "spell_version": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "external_addresses": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "allowed_binaries": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "air_version": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        getInfos_script
    );
}

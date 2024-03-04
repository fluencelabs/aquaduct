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
export const yourCloudlessFunction_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (new $res
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (seq
             (new $option-inline
              (seq
               (seq
                (new %Deal_obj_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (ap ("chainNetwork" "local") %Deal_obj_map)
                       (ap ("chainNetworkId" 31337) %Deal_obj_map)
                      )
                      (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %Deal_obj_map)
                     )
                     (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %Deal_obj_map)
                    )
                    (ap ("definition" "bafkreifdxe5sf54ss5euzj3gcmfewt3sx4f6en7hqg24tdry4fx6jhyt3m") %Deal_obj_map)
                   )
                   (ap ("timestamp" "2024-03-04T08:09:41.738Z") %Deal_obj_map)
                  )
                  (canon %init_peer_id% %Deal_obj_map  Deal_obj)
                 )
                )
                (xor
                 (ap Deal_obj $option-inline)
                 (null)
                )
               )
               (canon %init_peer_id% $option-inline  #option-inline-0)
              )
             )
             (new %Deals_obj_map
              (seq
               (ap ("myDeployment" #option-inline-0) %Deals_obj_map)
               (canon %init_peer_id% %Deals_obj_map  Deals_obj)
              )
             )
            )
            (ap Deals_obj.$.myDeployment Deals_obj_flat)
           )
           (ap Deals_obj_flat.$.[0].dealId Deals_obj_flat_flat)
          )
          (new $option-inline-1
           (seq
            (xor
             (ap -relay- $option-inline-1)
             (null)
            )
            (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
           )
          )
         )
         (new $res-0
          (seq
           (new -if-else-error-
            (new -else-error-
             (new -if-error-
              (xor
               (match #option-inline-1-0 []
                (ap -relay- $res-0)
               )
               (seq
                (ap :error: -if-error-)
                (xor
                 (match :error:.$.error_code 10001
                  (ap #option-inline-1-0.$.[0] $res-0)
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
           (new $res-0_test
            (seq
             (seq
              (fold $res-0 res-0_fold_var
               (seq
                (seq
                 (ap res-0_fold_var $res-0_test)
                 (canon %init_peer_id% $res-0_test  #res-0_iter_canon)
                )
                (xor
                 (match #res-0_iter_canon.length 1
                  (null)
                 )
                 (next res-0_fold_var)
                )
               )
               (never)
              )
              (canon %init_peer_id% $res-0_test  #res-0_result_canon)
             )
             (ap #res-0_result_canon res-0_gate)
            )
           )
          )
         )
        )
        (xor
         (seq
          (seq
           (seq
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
                    (new $errors
                     (new $workers
                      (null)
                     )
                    )
                   )
                   (new $array-inline
                    (seq
                     (seq
                      (seq
                       (ap "roundtrip" $array-inline)
                       (ap "Got a job for deal id" $array-inline)
                      )
                      (ap Deals_obj_flat_flat $array-inline)
                     )
                     (canon res-0_gate.$.[0] $array-inline  #array-inline-0)
                    )
                   )
                  )
                  (par
                   (seq
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                    (new -if-error-
                     (xor
                      (match true true
                       (call %init_peer_id% ("run-console" "print") [#array-inline-0])
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
                   (null)
                  )
                 )
                 (new $workers-1
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (call res-0_gate.$.[0] ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                       (new $array-inline-1
                        (seq
                         (seq
                          (seq
                           (ap "resolveSubnet" $array-inline-1)
                           (ap "subnet=" $array-inline-1)
                          )
                          (ap ret $array-inline-1)
                         )
                         (canon res-0_gate.$.[0] $array-inline-1  #array-inline-1-0)
                        )
                       )
                      )
                      (par
                       (seq
                        (new $-ephemeral-stream-
                         (new #-ephemeral-canon-
                          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                         )
                        )
                        (new -if-error-
                         (xor
                          (match true true
                           (call %init_peer_id% ("run-console" "print") [#array-inline-1-0])
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
                       (null)
                      )
                     )
                     (new -if-else-error-
                      (new -else-error-
                       (new -if-error-
                        (xor
                         (match ret.$.success false
                          (seq
                           (seq
                            (new $array-inline-2
                             (seq
                              (ap "Subnet resolve failed" $array-inline-2)
                              (canon res-0_gate.$.[0] $array-inline-2  #array-inline-2-0)
                             )
                            )
                            (par
                             (seq
                              (new $-ephemeral-stream-
                               (new #-ephemeral-canon-
                                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                               )
                              )
                              (new -if-error-
                               (xor
                                (match true true
                                 (call %init_peer_id% ("run-console" "print") [#array-inline-2-0])
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
                             (null)
                            )
                           )
                           (ap "Subnet resolve failed" $errors)
                          )
                         )
                         (seq
                          (ap :error: -if-error-)
                          (xor
                           (match :error:.$.error_code 10001
                            (fold ret.$.workers w-0-0
                             (seq
                              (ap w-0-0 $workers-1)
                              (next w-0-0)
                             )
                             (null)
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
                    )
                    (canon res-0_gate.$.[0] $workers-1  #-workers-fix-0)
                   )
                   (ap #-workers-fix-0 -workers-flat-0)
                  )
                 )
                )
                (par
                 (fold -workers-flat-0 w-1
                  (par
                   (xor
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $-ephemeral-stream-
                         (new #-ephemeral-canon-
                          (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                         )
                        )
                        (new $err-0
                         (xor
                          (seq
                           (new -if-else-error-
                            (new -else-error-
                             (new -if-error-
                              (xor
                               (seq
                                (match [] []
                                 (seq
                                  (seq
                                   (new $array-inline-3
                                    (seq
                                     (seq
                                      (ap w-1.$.worker_id.[0] $array-inline-3)
                                      (ap "About to start working" $array-inline-3)
                                     )
                                     (canon w-1.$.worker_id.[0] $array-inline-3  #array-inline-3-0)
                                    )
                                   )
                                   (new $newMsg
                                    (seq
                                     (seq
                                      (seq
                                       (ap "W.start" $newMsg)
                                       (fold #array-inline-3-0 m-0
                                        (seq
                                         (ap m-0 $newMsg)
                                         (next m-0)
                                        )
                                        (null)
                                       )
                                      )
                                      (canon w-1.$.worker_id.[0] $newMsg  #newMsg_canon)
                                     )
                                     (par
                                      (seq
                                       (seq
                                        (new $-ephemeral-stream-
                                         (new #-ephemeral-canon-
                                          (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                         )
                                        )
                                        (new $-ephemeral-stream-
                                         (new #-ephemeral-canon-
                                          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                         )
                                        )
                                       )
                                       (new -if-error-
                                        (xor
                                         (match true true
                                          (call %init_peer_id% ("run-console" "print") [#newMsg_canon])
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
                                      (null)
                                     )
                                    )
                                   )
                                  )
                                  (xor
                                   (seq
                                    (seq
                                     (seq
                                      (seq
                                       (call w-1.$.worker_id.[0] ("myService" "greeting") ["-works-ok-"] ret-0)
                                       (new $array-inline-4
                                        (seq
                                         (seq
                                          (seq
                                           (ap w-1.$.worker_id.[0] $array-inline-4)
                                           (ap "MyService.greeting" $array-inline-4)
                                          )
                                          (ap ret-0 $array-inline-4)
                                         )
                                         (canon w-1.$.worker_id.[0] $array-inline-4  #array-inline-4-0)
                                        )
                                       )
                                      )
                                      (new $newMsg-0
                                       (seq
                                        (seq
                                         (seq
                                          (ap "W.start" $newMsg-0)
                                          (fold #array-inline-4-0 m-1-0
                                           (seq
                                            (ap m-1-0 $newMsg-0)
                                            (next m-1-0)
                                           )
                                           (null)
                                          )
                                         )
                                         (canon w-1.$.worker_id.[0] $newMsg-0  #newMsg-0_canon)
                                        )
                                        (par
                                         (seq
                                          (seq
                                           (new $-ephemeral-stream-
                                            (new #-ephemeral-canon-
                                             (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                            )
                                           )
                                           (new $-ephemeral-stream-
                                            (new #-ephemeral-canon-
                                             (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                            )
                                           )
                                          )
                                          (new -if-error-
                                           (xor
                                            (match true true
                                             (call %init_peer_id% ("run-console" "print") [#newMsg-0_canon])
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
                                         (null)
                                        )
                                       )
                                      )
                                     )
                                     (ap ret-0 $res)
                                    )
                                    (new $-ephemeral-stream-
                                     (new #-ephemeral-canon-
                                      (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                     )
                                    )
                                   )
                                   (seq
                                    (seq
                                     (new $array-inline-5
                                      (seq
                                       (seq
                                        (seq
                                         (ap w-1.$.worker_id.[0] $array-inline-5)
                                         (ap "MyService.greeting call failed" $array-inline-5)
                                        )
                                        (ap :error:.$.message $array-inline-5)
                                       )
                                       (canon w-1.$.worker_id.[0] $array-inline-5  #array-inline-5-0)
                                      )
                                     )
                                     (new $newMsg-1
                                      (seq
                                       (seq
                                        (seq
                                         (ap "W.start" $newMsg-1)
                                         (fold #array-inline-5-0 m-2-0
                                          (seq
                                           (ap m-2-0 $newMsg-1)
                                           (next m-2-0)
                                          )
                                          (null)
                                         )
                                        )
                                        (canon w-1.$.worker_id.[0] $newMsg-1  #newMsg-1_canon)
                                       )
                                       (par
                                        (seq
                                         (seq
                                          (new $-ephemeral-stream-
                                           (new #-ephemeral-canon-
                                            (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                           )
                                          )
                                          (new $-ephemeral-stream-
                                           (new #-ephemeral-canon-
                                            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                           )
                                          )
                                         )
                                         (new -if-error-
                                          (xor
                                           (match true true
                                            (call %init_peer_id% ("run-console" "print") [#newMsg-1_canon])
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
                                        (null)
                                       )
                                      )
                                     )
                                    )
                                    (new $-ephemeral-stream-
                                     (new #-ephemeral-canon-
                                      (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                     )
                                    )
                                   )
                                  )
                                 )
                                )
                                (new $-ephemeral-stream-
                                 (new #-ephemeral-canon-
                                  (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                 )
                                )
                               )
                               (seq
                                (seq
                                 (ap :error: -if-error-)
                                 (xor
                                  (seq
                                   (match :error:.$.error_code 10001
                                    (seq
                                     (seq
                                      (ap [] literal_ap)
                                      (ap literal_ap literal_props)
                                     )
                                     (ap literal_props.$.[0] $err-0)
                                    )
                                   )
                                   (new $-ephemeral-stream-
                                    (new #-ephemeral-canon-
                                     (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                    )
                                   )
                                  )
                                  (seq
                                   (seq
                                    (seq
                                     (ap :error: -else-error-)
                                     (xor
                                      (seq
                                       (match :error:.$.error_code 10001
                                        (ap -if-error- -if-else-error-)
                                       )
                                       (new $-ephemeral-stream-
                                        (new #-ephemeral-canon-
                                         (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                        )
                                       )
                                      )
                                      (seq
                                       (ap -else-error- -if-else-error-)
                                       (new $-ephemeral-stream-
                                        (new #-ephemeral-canon-
                                         (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                        )
                                       )
                                      )
                                     )
                                    )
                                    (fail -if-else-error-)
                                   )
                                   (new $-ephemeral-stream-
                                    (new #-ephemeral-canon-
                                     (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                    )
                                   )
                                  )
                                 )
                                )
                                (new $-ephemeral-stream-
                                 (new #-ephemeral-canon-
                                  (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                 )
                                )
                               )
                              )
                             )
                            )
                           )
                           (new $-ephemeral-stream-
                            (new #-ephemeral-canon-
                             (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                            )
                           )
                          )
                          (fail :error:)
                         )
                        )
                       )
                       (ap w-1 $workers)
                      )
                      (new $-ephemeral-stream-
                       (new #-ephemeral-canon-
                        (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                       )
                      )
                     )
                     (new $-ephemeral-stream-
                      (new #-ephemeral-canon-
                       (canon res-0_gate.$.[0] $-ephemeral-stream-  #-ephemeral-canon-)
                      )
                     )
                    )
                    (seq
                     (seq
                      (new $-ephemeral-stream-
                       (new #-ephemeral-canon-
                        (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                       )
                      )
                      (new $-ephemeral-stream-
                       (new #-ephemeral-canon-
                        (canon res-0_gate.$.[0] $-ephemeral-stream-  #-ephemeral-canon-)
                       )
                      )
                     )
                     (fail :error:)
                    )
                   )
                   (next w-1)
                  )
                  (never)
                 )
                 (null)
                )
               )
               (new $array-inline-6
                (seq
                 (ap "Running new yield" $array-inline-6)
                 (canon res-0_gate.$.[0] $array-inline-6  #array-inline-6-0)
                )
               )
              )
              (new $newMsg-2
               (seq
                (seq
                 (seq
                  (ap "Make.simple2" $newMsg-2)
                  (fold #array-inline-6-0 m-3-0
                   (seq
                    (ap m-3-0 $newMsg-2)
                    (next m-3-0)
                   )
                   (null)
                  )
                 )
                 (canon res-0_gate.$.[0] $newMsg-2  #newMsg-2_canon)
                )
                (par
                 (seq
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                  (new -if-error-
                   (xor
                    (match true true
                     (call %init_peer_id% ("run-console" "print") [#newMsg-2_canon])
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
                 (null)
                )
               )
              )
             )
             (new $new_error
              (new $ok
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (new $array-inline-7
                           (seq
                            (ap "is called" $array-inline-7)
                            (canon res-0_gate.$.[0] $array-inline-7  #array-inline-7-0)
                           )
                          )
                          (new $newMsg-3
                           (seq
                            (seq
                             (seq
                              (ap "Yield.wait_for" $newMsg-3)
                              (fold #array-inline-7-0 m-4-0
                               (seq
                                (ap m-4-0 $newMsg-3)
                                (next m-4-0)
                               )
                               (null)
                              )
                             )
                             (canon res-0_gate.$.[0] $newMsg-3  #newMsg-3_canon)
                            )
                            (par
                             (seq
                              (new $-ephemeral-stream-
                               (new #-ephemeral-canon-
                                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                               )
                              )
                              (new -if-error-
                               (xor
                                (match true true
                                 (call %init_peer_id% ("run-console" "print") [#newMsg-3_canon])
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
                             (null)
                            )
                           )
                          )
                         )
                         (par
                          (fold $workers w-3-0
                           (par
                            (seq
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (new $array-inline-8
                                    (seq
                                     (seq
                                      (ap "Got a worker" $array-inline-8)
                                      (ap w-3-0 $array-inline-8)
                                     )
                                     (canon res-0_gate.$.[0] $array-inline-8  #array-inline-8-0)
                                    )
                                   )
                                   (new $newMsg-4
                                    (seq
                                     (seq
                                      (seq
                                       (ap "Yield.wait_for" $newMsg-4)
                                       (fold #array-inline-8-0 m-5-0
                                        (seq
                                         (ap m-5-0 $newMsg-4)
                                         (next m-5-0)
                                        )
                                        (null)
                                       )
                                      )
                                      (canon res-0_gate.$.[0] $newMsg-4  #newMsg-4_canon)
                                     )
                                     (par
                                      (seq
                                       (new $-ephemeral-stream-
                                        (new #-ephemeral-canon-
                                         (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                        )
                                       )
                                       (new -if-error-
                                        (xor
                                         (match true true
                                          (call %init_peer_id% ("run-console" "print") [#newMsg-4_canon])
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
                                      (null)
                                     )
                                    )
                                   )
                                  )
                                  (new $array-inline-9
                                   (seq
                                    (seq
                                     (seq
                                      (ap "W.yield" $array-inline-9)
                                      (ap w-3-0.$.worker_id.[0] $array-inline-9)
                                     )
                                     (ap "About to join res!" $array-inline-9)
                                    )
                                    (canon res-0_gate.$.[0] $array-inline-9  #array-inline-9-0)
                                   )
                                  )
                                 )
                                 (par
                                  (seq
                                   (new $-ephemeral-stream-
                                    (new #-ephemeral-canon-
                                     (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                    )
                                   )
                                   (new -if-error-
                                    (xor
                                     (match true true
                                      (call %init_peer_id% ("run-console" "print") [#array-inline-9-0])
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
                                  (null)
                                 )
                                )
                                (new $res_test
                                 (seq
                                  (seq
                                   (fold $res res_fold_var
                                    (seq
                                     (seq
                                      (ap res_fold_var $res_test)
                                      (canon res-0_gate.$.[0] $res_test  #res_iter_canon)
                                     )
                                     (xor
                                      (match #res_iter_canon.length 1
                                       (null)
                                      )
                                      (next res_fold_var)
                                     )
                                    )
                                    (never)
                                   )
                                   (canon res-0_gate.$.[0] $res_test  #res_result_canon)
                                  )
                                  (ap #res_result_canon res_gate)
                                 )
                                )
                               )
                               (new $array-inline-10
                                (seq
                                 (seq
                                  (ap "Errors are" $array-inline-10)
                                  (ap [] $array-inline-10)
                                 )
                                 (canon res-0_gate.$.[0] $array-inline-10  #array-inline-10-0)
                                )
                               )
                              )
                              (new $newMsg-5
                               (seq
                                (seq
                                 (seq
                                  (ap "Yield.wait_for" $newMsg-5)
                                  (fold #array-inline-10-0 m-6-0
                                   (seq
                                    (ap m-6-0 $newMsg-5)
                                    (next m-6-0)
                                   )
                                   (null)
                                  )
                                 )
                                 (canon res-0_gate.$.[0] $newMsg-5  #newMsg-5_canon)
                                )
                                (par
                                 (seq
                                  (new $-ephemeral-stream-
                                   (new #-ephemeral-canon-
                                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                   )
                                  )
                                  (new -if-error-
                                   (xor
                                    (match true true
                                     (call %init_peer_id% ("run-console" "print") [#newMsg-5_canon])
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
                                 (null)
                                )
                               )
                              )
                             )
                             (new -if-else-error-
                              (new -else-error-
                               (new -if-error-
                                (xor
                                 (match [] []
                                  (ap true $ok)
                                 )
                                 (seq
                                  (ap :error: -if-error-)
                                  (xor
                                   (match :error:.$.error_code 10001
                                    (null)
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
                            )
                            (next w-3-0)
                           )
                           (never)
                          )
                          (null)
                         )
                        )
                        (par
                         (new $ok_test
                          (seq
                           (seq
                            (fold $ok ok_fold_var
                             (seq
                              (seq
                               (ap ok_fold_var $ok_test)
                               (canon res-0_gate.$.[0] $ok_test  #ok_iter_canon)
                              )
                              (xor
                               (match #ok_iter_canon.length 1
                                (null)
                               )
                               (next ok_fold_var)
                              )
                             )
                             (never)
                            )
                            (canon res-0_gate.$.[0] $ok_test  #ok_result_canon)
                           )
                           (ap #ok_result_canon ok_gate)
                          )
                         )
                         (new $errors_test
                          (seq
                           (seq
                            (fold $errors errors_fold_var
                             (seq
                              (seq
                               (ap errors_fold_var $errors_test)
                               (canon res-0_gate.$.[0] $errors_test  #errors_iter_canon)
                              )
                              (xor
                               (match #errors_iter_canon.length 1
                                (null)
                               )
                               (next errors_fold_var)
                              )
                             )
                             (never)
                            )
                            (canon res-0_gate.$.[0] $errors_test  #errors_result_canon)
                           )
                           (ap #errors_result_canon errors_gate)
                          )
                         )
                        )
                       )
                       (new $array-inline-11
                        (seq
                         (ap "Joined" $array-inline-11)
                         (canon res-0_gate.$.[0] $array-inline-11  #array-inline-11-0)
                        )
                       )
                      )
                      (new $newMsg-6
                       (seq
                        (seq
                         (seq
                          (ap "Yield.wait_for" $newMsg-6)
                          (fold #array-inline-11-0 m-7-0
                           (seq
                            (ap m-7-0 $newMsg-6)
                            (next m-7-0)
                           )
                           (null)
                          )
                         )
                         (canon res-0_gate.$.[0] $newMsg-6  #newMsg-6_canon)
                        )
                        (par
                         (seq
                          (new $-ephemeral-stream-
                           (new #-ephemeral-canon-
                            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                           )
                          )
                          (new -if-error-
                           (xor
                            (match true true
                             (call %init_peer_id% ("run-console" "print") [#newMsg-6_canon])
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
                         (null)
                        )
                       )
                      )
                     )
                     (canon res-0_gate.$.[0] $errors  #errors_to_functor)
                    )
                    (ap #errors_to_functor.length errors_length)
                   )
                   (call res-0_gate.$.[0] ("cmp" "gte") [errors_length 1] gte)
                  )
                  (new -if-error-
                   (xor
                    (match gte true
                     (seq
                      (canon res-0_gate.$.[0] $errors  #errors_canon)
                      (fold #errors_canon a-1-0
                       (seq
                        (ap a-1-0 $new_error)
                        (next a-1-0)
                       )
                       (null)
                      )
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
                 (canon res-0_gate.$.[0] $new_error  #-new_error-fix-0)
                )
                (ap #-new_error-fix-0 -new_error-flat-0)
               )
              )
             )
            )
            (new $array-inline-12
             (seq
              (seq
               (ap "new_errs =" $array-inline-12)
               (ap -new_error-flat-0 $array-inline-12)
              )
              (canon res-0_gate.$.[0] $array-inline-12  #array-inline-12-0)
             )
            )
           )
           (new $newMsg-7
            (seq
             (seq
              (seq
               (ap "Make.simple2" $newMsg-7)
               (fold #array-inline-12-0 m-8-0
                (seq
                 (ap m-8-0 $newMsg-7)
                 (next m-8-0)
                )
                (null)
               )
              )
              (canon res-0_gate.$.[0] $newMsg-7  #newMsg-7_canon)
             )
             (par
              (seq
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
               (new -if-error-
                (xor
                 (match true true
                  (call %init_peer_id% ("run-console" "print") [#newMsg-7_canon])
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
              (null)
             )
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
       )
       (new -if-error-
        (xor
         (mismatch -new_error-flat-0 []
          (seq
           (new $stream-anon-0
            (new $stream-anon-0
             (seq
              (seq
               (seq
                (ap "Errors:" $stream-anon-0)
                (fold -new_error-flat-0 a-2-0
                 (seq
                  (ap a-2-0 $stream-anon-0)
                  (next a-2-0)
                 )
                 (null)
                )
               )
               (canon %init_peer_id% $stream-anon-0  #-new_stream-fix-0)
              )
              (ap #-new_stream-fix-0 -new_stream-flat-0)
             )
            )
           )
           (call %init_peer_id% ("run-console" "print") [-new_stream-flat-0])
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
      (canon %init_peer_id% $res  #-res-fix-0)
     )
     (ap #-res-fix-0 -res-flat-0)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [-res-flat-0])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function yourCloudlessFunction(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "yourCloudlessFunction",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
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
        yourCloudlessFunction_script
    );
}

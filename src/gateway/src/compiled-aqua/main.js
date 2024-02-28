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
                     (ap ("dealId" "5e3d0fde6f793b3115a9e7f5ebc195bbeed35d6c") %Deal_obj_map)
                    )
                    (ap ("dealIdOriginal" "0x5E3d0fdE6f793B3115A9E7f5EBC195bbeeD35d6C") %Deal_obj_map)
                   )
                   (ap ("definition" "bafkreifdxe5sf54ss5euzj3gcmfewt3sx4f6en7hqg24tdry4fx6jhyt3m") %Deal_obj_map)
                  )
                  (ap ("timestamp" "2024-02-27T15:43:17.929Z") %Deal_obj_map)
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
        (new $yieldOn
         (seq
          (seq
           (seq
            (fold #option-inline-1-0 a-0
             (seq
              (ap a-0 $yieldOn)
              (next a-0)
             )
             (null)
            )
            (ap -relay- $yieldOn)
           )
           (new $yieldOn_test
            (seq
             (seq
              (fold $yieldOn yieldOn_fold_var
               (seq
                (seq
                 (ap yieldOn_fold_var $yieldOn_test)
                 (canon %init_peer_id% $yieldOn_test  #yieldOn_iter_canon)
                )
                (xor
                 (match #yieldOn_iter_canon.length 1
                  (null)
                 )
                 (next yieldOn_fold_var)
                )
               )
               (never)
              )
              (canon %init_peer_id% $yieldOn_test  #yieldOn_result_canon)
             )
             (ap #yieldOn_result_canon yieldOn_gate)
            )
           )
          )
          (xor
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
                (new $ok
                 (null)
                )
               )
              )
              (new $workers
               (seq
                (new $res-0
                 (seq
                  (new -if-else-error-
                   (new -else-error-
                    (new -if-error-
                     (xor
                      (match [] []
                       (ap -relay- $res-0)
                      )
                      (seq
                       (ap :error: -if-error-)
                       (xor
                        (match :error:.$.error_code 10001
                         (seq
                          (seq
                           (ap [] literal_ap)
                           (ap literal_ap literal_props)
                          )
                          (ap literal_props.$.[0] $res-0)
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
                  (new $res-0_test
                   (seq
                    (seq
                     (fold $res-0 res-0_fold_var
                      (seq
                       (seq
                        (ap res-0_fold_var $res-0_test)
                        (canon yieldOn_gate.$.[0] $res-0_test  #res-0_iter_canon)
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
                     (canon yieldOn_gate.$.[0] $res-0_test  #res-0_result_canon)
                    )
                    (ap #res-0_result_canon res-0_gate)
                   )
                  )
                 )
                )
                (xor
                 (par
                  (seq
                   (new $workers-0
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (call res-0_gate.$.[0] ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                         (new $array-inline
                          (seq
                           (seq
                            (ap "Subnet resolved to:" $array-inline)
                            (ap ret $array-inline)
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
                       (new -if-else-error-
                        (new -else-error-
                         (new -if-error-
                          (xor
                           (match ret.$.success false
                            (seq
                             (seq
                              (new $array-inline-1
                               (seq
                                (ap "Subnet resolve failed" $array-inline-1)
                                (canon res-0_gate.$.[0] $array-inline-1  #array-inline-1-0)
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
                             (ap "Subnet resolve failed" $errors)
                            )
                           )
                           (seq
                            (ap :error: -if-error-)
                            (xor
                             (match :error:.$.error_code 10001
                              (fold ret.$.workers w-0-0
                               (seq
                                (ap w-0-0 $workers-0)
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
                      (canon res-0_gate.$.[0] $workers-0  #-workers-fix-0)
                     )
                     (ap #-workers-fix-0 -workers-flat-0)
                    )
                   )
                   (fold -workers-flat-0 w-1
                    (par
                     (new $is_active_opt
                      (xor
                       (seq
                        (seq
                         (seq
                          (seq
                           (xor
                            (seq
                             (call w-1.$.host_id ("worker" "is_active") [Deals_obj_flat_flat] ret-0)
                             (ap ret-0 $is_active_opt)
                            )
                            (seq
                             (ap :error:.$.message $errors)
                             (ap false $is_active_opt)
                            )
                           )
                           (new $is_active_opt_test
                            (seq
                             (seq
                              (fold $is_active_opt is_active_opt_fold_var
                               (seq
                                (seq
                                 (ap is_active_opt_fold_var $is_active_opt_test)
                                 (canon w-1.$.host_id $is_active_opt_test  #is_active_opt_iter_canon)
                                )
                                (xor
                                 (match #is_active_opt_iter_canon.length 1
                                  (null)
                                 )
                                 (next is_active_opt_fold_var)
                                )
                               )
                               (never)
                              )
                              (canon w-1.$.host_id $is_active_opt_test  #is_active_opt_result_canon)
                             )
                             (ap #is_active_opt_result_canon is_active_opt_gate)
                            )
                           )
                          )
                          (new $array-inline-2
                           (seq
                            (seq
                             (ap "Hello guys!" $array-inline-2)
                             (ap is_active_opt_gate.$.[0] $array-inline-2)
                            )
                            (canon w-1.$.host_id $array-inline-2  #array-inline-2-0)
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
                        (new -if-else-error-
                         (new -else-error-
                          (new -if-error-
                           (xor
                            (seq
                             (match is_active_opt_gate.$.[0] false
                              (seq
                               (seq
                                (new $array-inline-3
                                 (seq
                                  (seq
                                   (ap "Deal is inactive on this host, have you deposited enough funds?" $array-inline-3)
                                   (ap w-1.$.host_id $array-inline-3)
                                  )
                                  (canon w-1.$.host_id $array-inline-3  #array-inline-3-0)
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
                                     (call %init_peer_id% ("run-console" "print") [#array-inline-3-0])
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
                               (ap "Deal is not active, worker is not created or not available" $errors)
                              )
                             )
                             (new $-ephemeral-stream-
                              (new #-ephemeral-canon-
                               (canon yieldOn_gate.$.[0] $-ephemeral-stream-  #-ephemeral-canon-)
                              )
                             )
                            )
                            (seq
                             (ap :error: -if-error-)
                             (xor
                              (match :error:.$.error_code 10001
                               (seq
                                (seq
                                 (new $array-inline-4
                                  (seq
                                   (ap "Deal is active, okay" $array-inline-4)
                                   (canon w-1.$.host_id $array-inline-4  #array-inline-4-0)
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
                                      (call %init_peer_id% ("run-console" "print") [#array-inline-4-0])
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
                                (par
                                 (seq
                                  (new $array-inline-5
                                   (seq
                                    (seq
                                     (seq
                                      (seq
                                       (ap "Going go " $array-inline-5)
                                       (ap w-1.$.worker_id.[0] $array-inline-5)
                                      )
                                      (ap "via" $array-inline-5)
                                     )
                                     (ap w-1.$.host_id $array-inline-5)
                                    )
                                    (canon w-1.$.host_id $array-inline-5  #array-inline-5-0)
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
                                       (call %init_peer_id% ("run-console" "print") [#array-inline-5-0])
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
                                 (xor
                                  (seq
                                   (seq
                                    (new $array-inline-6
                                     (seq
                                      (seq
                                       (ap "got compute job on" $array-inline-6)
                                       (ap w-1.$.worker_id.[0] $array-inline-6)
                                      )
                                      (canon w-1.$.worker_id.[0] $array-inline-6  #array-inline-6-0)
                                     )
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
                                         (call %init_peer_id% ("run-console" "print") [#array-inline-6-0])
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
                                   (xor
                                    (seq
                                     (seq
                                      (seq
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
                                                  (seq
                                                   (new $array-inline-7
                                                    (seq
                                                     (ap "About to start working" $array-inline-7)
                                                     (canon w-1.$.worker_id.[0] $array-inline-7  #array-inline-7-0)
                                                    )
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
                                                        (call %init_peer_id% ("run-console" "print") [#array-inline-7-0])
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
                                                  (call w-1.$.worker_id.[0] ("myService" "greeting") ["Hello from worker"] ret-1)
                                                 )
                                                 (ap ret-1 $res)
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
                                                     (ap [] literal_ap-0)
                                                     (ap literal_ap-0 literal_props-0)
                                                    )
                                                    (ap literal_props-0.$.[0] $err-0)
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
                                       (canon yieldOn_gate.$.[0] $-ephemeral-stream-  #-ephemeral-canon-)
                                      )
                                     )
                                    )
                                    (seq
                                     (seq
                                      (seq
                                       (seq
                                        (new $array-inline-8
                                         (seq
                                          (seq
                                           (seq
                                            (seq
                                             (ap "Compute job errored on" $array-inline-8)
                                             (ap w-1.$.worker_id.[0] $array-inline-8)
                                            )
                                            (ap "message:" $array-inline-8)
                                           )
                                           (ap :error:.$.message $array-inline-8)
                                          )
                                          (canon w-1.$.worker_id.[0] $array-inline-8  #array-inline-8-0)
                                         )
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
                                             (call %init_peer_id% ("run-console" "print") [#array-inline-8-0])
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
                                       (ap :error:.$.message $errors)
                                      )
                                      (new $-ephemeral-stream-
                                       (new #-ephemeral-canon-
                                        (canon w-1.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                                       )
                                      )
                                     )
                                     (new $-ephemeral-stream-
                                      (new #-ephemeral-canon-
                                       (canon yieldOn_gate.$.[0] $-ephemeral-stream-  #-ephemeral-canon-)
                                      )
                                     )
                                    )
                                   )
                                  )
                                  (fail :error:)
                                 )
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
                                     (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                    )
                                   )
                                  )
                                  (seq
                                   (ap -else-error- -if-else-error-)
                                   (new $-ephemeral-stream-
                                    (new #-ephemeral-canon-
                                     (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                    )
                                   )
                                  )
                                 )
                                )
                                (fail -if-else-error-)
                               )
                               (new $-ephemeral-stream-
                                (new #-ephemeral-canon-
                                 (canon yieldOn_gate.$.[0] $-ephemeral-stream-  #-ephemeral-canon-)
                                )
                               )
                              )
                             )
                            )
                           )
                          )
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
                  )
                  (null)
                 )
                 (fail :error:)
                )
               )
              )
             )
             (new $new_error
              (new $ok-0
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (par
                       (fold $workers w-3-0
                        (par
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (new $array-inline-9
                               (seq
                                (ap "About to join res!" $array-inline-9)
                                (canon yieldOn_gate.$.[0] $array-inline-9  #array-inline-9-0)
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
                                   (canon yieldOn_gate.$.[0] $res_test  #res_iter_canon)
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
                                (canon yieldOn_gate.$.[0] $res_test  #res_result_canon)
                               )
                               (ap #res_result_canon res_gate)
                              )
                             )
                            )
                            (ap [] literal_ap-1)
                           )
                           (ap literal_ap-1 literal_props-1)
                          )
                          (new -if-else-error-
                           (new -else-error-
                            (new -if-error-
                             (xor
                              (match literal_props-1 []
                               (ap true $ok-0)
                              )
                              (seq
                               (ap :error: -if-error-)
                               (xor
                                (match :error:.$.error_code 10001
                                 (seq
                                  (seq
                                   (seq
                                    (seq
                                     (seq
                                      (new $array-inline-10
                                       (seq
                                        (ap "About to join res!" $array-inline-10)
                                        (canon yieldOn_gate.$.[0] $array-inline-10  #array-inline-10-0)
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
                                           (call %init_peer_id% ("run-console" "print") [#array-inline-10-0])
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
                                     (new $res_test-0
                                      (seq
                                       (seq
                                        (fold $res res_fold_var-0
                                         (seq
                                          (seq
                                           (ap res_fold_var-0 $res_test-0)
                                           (canon yieldOn_gate.$.[0] $res_test-0  #res_iter_canon-0)
                                          )
                                          (xor
                                           (match #res_iter_canon-0.length 1
                                            (null)
                                           )
                                           (next res_fold_var-0)
                                          )
                                         )
                                         (never)
                                        )
                                        (canon yieldOn_gate.$.[0] $res_test-0  #res_result_canon-0)
                                       )
                                       (ap #res_result_canon-0 res_gate-0)
                                      )
                                     )
                                    )
                                    (ap [] literal_ap-2)
                                   )
                                   (ap literal_ap-2 literal_props-2)
                                  )
                                  (fold literal_props-2 a-1-0
                                   (seq
                                    (ap a-1-0 $errors)
                                    (next a-1-0)
                                   )
                                   (null)
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
                         )
                         (next w-3-0)
                        )
                        (never)
                       )
                       (null)
                      )
                      (par
                       (new $ok-0_test
                        (seq
                         (seq
                          (fold $ok-0 ok-0_fold_var
                           (seq
                            (seq
                             (ap ok-0_fold_var $ok-0_test)
                             (canon yieldOn_gate.$.[0] $ok-0_test  #ok-0_iter_canon)
                            )
                            (xor
                             (match #ok-0_iter_canon.length 1
                              (null)
                             )
                             (next ok-0_fold_var)
                            )
                           )
                           (never)
                          )
                          (canon yieldOn_gate.$.[0] $ok-0_test  #ok-0_result_canon)
                         )
                         (ap #ok-0_result_canon ok-0_gate)
                        )
                       )
                       (new $errors_test
                        (seq
                         (seq
                          (fold $errors errors_fold_var
                           (seq
                            (seq
                             (ap errors_fold_var $errors_test)
                             (canon yieldOn_gate.$.[0] $errors_test  #errors_iter_canon)
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
                          (canon yieldOn_gate.$.[0] $errors_test  #errors_result_canon)
                         )
                         (ap #errors_result_canon errors_gate)
                        )
                       )
                      )
                     )
                     (canon yieldOn_gate.$.[0] $errors  #errors_to_functor)
                    )
                    (ap #errors_to_functor.length errors_length)
                   )
                   (call yieldOn_gate.$.[0] ("cmp" "gte") [errors_length 1] gte)
                  )
                  (new -if-error-
                   (xor
                    (match gte true
                     (seq
                      (canon yieldOn_gate.$.[0] $errors  #errors_canon)
                      (fold #errors_canon a-2-0
                       (seq
                        (ap a-2-0 $new_error)
                        (next a-2-0)
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
                 (canon yieldOn_gate.$.[0] $new_error  #-new_error-fix-0)
                )
                (ap #-new_error-fix-0 -new_error-flat-0)
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
                (fold -new_error-flat-0 a-3-0
                 (seq
                  (ap a-3-0 $stream-anon-0)
                  (next a-3-0)
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

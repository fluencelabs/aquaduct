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
                          (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %Deal_obj_map)
                         )
                         (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %Deal_obj_map)
                        )
                        (ap ("definition" "bafkreifherion3ik7aemwlat4yk3yfqbtbokrvggjzslhrb2f25o7zmclm") %Deal_obj_map)
                       )
                       (ap ("timestamp" "2024-03-08T12:26:53.869Z") %Deal_obj_map)
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
              (new $array-inline
               (seq
                (ap -relay- $array-inline)
                (canon %init_peer_id% $array-inline  #array-inline-0)
               )
              )
             )
             (new $ingoing
              (new $observed_on
               (new $errors
                (new $outgoing
                 (new $workers
                  (null)
                 )
                )
               )
              )
             )
            )
            (new $array-inline-1
             (seq
              (ap "Execution begins now" $array-inline-1)
              (canon %init_peer_id% $array-inline-1  #array-inline-1-0)
             )
            )
           )
           (call %init_peer_id% ("run-console" "print") [#array-inline-1-0])
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
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                   (new $array-inline-2
                    (seq
                     (seq
                      (seq
                       (ap "roundtrip" $array-inline-2)
                       (ap "Got a job for deal id" $array-inline-2)
                      )
                      (ap Deals_obj_flat_flat $array-inline-2)
                     )
                     (canon res-0_gate.$.[0] $array-inline-2  #array-inline-2-0)
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
                      (match false true
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
                 (fold #array-inline-0 p-0
                  (par
                   (xor
                    (seq
                     (seq
                      (seq
                       (new $workers-1
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (call p-0 ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                             (new $array-inline-3
                              (seq
                               (seq
                                (seq
                                 (ap "resolveSubnet" $array-inline-3)
                                 (ap "subnet=" $array-inline-3)
                                )
                                (ap ret $array-inline-3)
                               )
                               (canon p-0 $array-inline-3  #array-inline-3-0)
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
                                (match false true
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
                           (new -if-else-error-
                            (new -else-error-
                             (new -if-error-
                              (xor
                               (match ret.$.success false
                                (seq
                                 (seq
                                  (new $array-inline-4
                                   (seq
                                    (ap "Subnet resolve failed" $array-inline-4)
                                    (canon p-0 $array-inline-4  #array-inline-4-0)
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
                                      (match false true
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
                          (canon p-0 $workers-1  #-workers-fix-0)
                         )
                         (ap #-workers-fix-0 -workers-flat-0)
                        )
                       )
                       (ap p-0 $ingoing)
                      )
                      (fold -workers-flat-0 w-1
                       (par
                        (xor
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (new $array-inline-5
                                (seq
                                 (seq
                                  (ap "on host" $array-inline-5)
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
                                   (match false true
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
                              (canon w-1.$.host_id $observed_on  #observed_on_canon)
                             )
                             (new $c
                              (seq
                               (seq
                                (fold #observed_on_canon t-0
                                 (seq
                                  (new -if-error-
                                   (xor
                                    (match t-0 w-1.$.worker_id.[0]
                                     (ap true $c)
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
                                  (next t-0)
                                 )
                                 (null)
                                )
                                (ap false $c)
                               )
                               (new $c_test
                                (seq
                                 (seq
                                  (fold $c c_fold_var
                                   (seq
                                    (seq
                                     (ap c_fold_var $c_test)
                                     (canon w-1.$.host_id $c_test  #c_iter_canon)
                                    )
                                    (xor
                                     (match #c_iter_canon.length 1
                                      (null)
                                     )
                                     (next c_fold_var)
                                    )
                                   )
                                   (never)
                                  )
                                  (canon w-1.$.host_id $c_test  #c_result_canon)
                                 )
                                 (ap #c_result_canon c_gate)
                                )
                               )
                              )
                             )
                            )
                            (new -if-else-error-
                             (new -else-error-
                              (new -if-error-
                               (xor
                                (match c_gate.$.[0] false
                                 (seq
                                  (seq
                                   (seq
                                    (par
                                     (seq
                                      (new $-ephemeral-stream-
                                       (new #-ephemeral-canon-
                                        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                       )
                                      )
                                      (new -if-error-
                                       (xor
                                        (match false true
                                         (call %init_peer_id% ("run-console" "print") [w-1.$.worker_id])
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
                                    (ap w-1.$.worker_id.[0] $observed_on)
                                   )
                                   (new $is_active_opt
                                    (new $w_is_active
                                     (seq
                                      (seq
                                       (seq
                                        (xor
                                         (seq
                                          (call w-1.$.host_id ("worker" "is_active") [Deals_obj_flat_flat] ret-0)
                                          (ap ret-0 $w_is_active)
                                         )
                                         (seq
                                          (seq
                                           (seq
                                            (new $array-inline-6
                                             (seq
                                              (seq
                                               (ap "Cannot check if worker for the deal is active, error: " $array-inline-6)
                                               (ap :error:.$.message $array-inline-6)
                                              )
                                              (canon w-1.$.host_id $array-inline-6  #array-inline-6-0)
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
                                                (match false true
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
                                           (ap :error:.$.message $errors)
                                          )
                                          (ap false $w_is_active)
                                         )
                                        )
                                        (new $w_is_active_test
                                         (seq
                                          (seq
                                           (fold $w_is_active w_is_active_fold_var
                                            (seq
                                             (seq
                                              (ap w_is_active_fold_var $w_is_active_test)
                                              (canon w-1.$.host_id $w_is_active_test  #w_is_active_iter_canon)
                                             )
                                             (xor
                                              (match #w_is_active_iter_canon.length 1
                                               (null)
                                              )
                                              (next w_is_active_fold_var)
                                             )
                                            )
                                            (never)
                                           )
                                           (canon w-1.$.host_id $w_is_active_test  #w_is_active_result_canon)
                                          )
                                          (ap #w_is_active_result_canon w_is_active_gate)
                                         )
                                        )
                                       )
                                       (new -if-else-error-
                                        (new -else-error-
                                         (new -if-error-
                                          (xor
                                           (match w_is_active_gate.$.[0] true
                                            (new -if-else-error-
                                             (new -else-error-
                                              (new -if-error-
                                               (xor
                                                (mismatch [] []
                                                 (ap false $is_active_opt)
                                                )
                                                (seq
                                                 (ap :error: -if-error-)
                                                 (xor
                                                  (match :error:.$.error_code 10002
                                                   (ap true $is_active_opt)
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
                                           (seq
                                            (ap :error: -if-error-)
                                            (xor
                                             (match :error:.$.error_code 10001
                                              (seq
                                               (seq
                                                (seq
                                                 (new $array-inline-7
                                                  (seq
                                                   (ap "Deal is inactive on the host, have you deposited enough funds?" $array-inline-7)
                                                   (canon w-1.$.host_id $array-inline-7  #array-inline-7-0)
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
                                                     (match false true
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
                                                (ap "Deal is not active, worker is not created or not available" $errors)
                                               )
                                               (ap false $is_active_opt)
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
                                    )
                                   )
                                  )
                                  (new -if-error-
                                   (xor
                                    (match is_active_opt_gate.$.[0] true
                                     (seq
                                      (seq
                                       (new $array-inline-8
                                        (seq
                                         (seq
                                          (seq
                                           (seq
                                            (ap "Deal is active, so going go " $array-inline-8)
                                            (ap w-1.$.worker_id.[0] $array-inline-8)
                                           )
                                           (ap "via" $array-inline-8)
                                          )
                                          (ap w-1.$.host_id $array-inline-8)
                                         )
                                         (canon w-1.$.host_id $array-inline-8  #array-inline-8-0)
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
                                           (match false true
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
                                      (xor
                                       (seq
                                        (seq
                                         (new $array-inline-9
                                          (seq
                                           (seq
                                            (ap "got compute job on" $array-inline-9)
                                            (ap w-1.$.worker_id.[0] $array-inline-9)
                                           )
                                           (canon w-1.$.worker_id.[0] $array-inline-9  #array-inline-9-0)
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
                                             (match false true
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
                                        (xor
                                         (seq
                                          (seq
                                           (seq
                                            (new $err-0
                                             (xor
                                              (new -if-else-error-
                                               (new -else-error-
                                                (new -if-error-
                                                 (xor
                                                  (match [] []
                                                   (seq
                                                    (seq
                                                     (seq
                                                      (seq
                                                       (seq
                                                        (new $array-inline-10
                                                         (seq
                                                          (seq
                                                           (ap w-1.$.worker_id.[0] $array-inline-10)
                                                           (ap "About to start working" $array-inline-10)
                                                          )
                                                          (canon w-1.$.worker_id.[0] $array-inline-10  #array-inline-10-0)
                                                         )
                                                        )
                                                        (new $newMsg
                                                         (seq
                                                          (seq
                                                           (seq
                                                            (ap "W.start" $newMsg)
                                                            (fold #array-inline-10-0 m-0
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
                                                              (match false true
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
                                                       (call w-1.$.worker_id.[0] ("myService" "greeting") ["-works-ok-"] ret-1)
                                                      )
                                                      (new $array-inline-11
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (ap w-1.$.worker_id.[0] $array-inline-11)
                                                          (ap "MyService.greeting" $array-inline-11)
                                                         )
                                                         (ap ret-1 $array-inline-11)
                                                        )
                                                        (canon w-1.$.worker_id.[0] $array-inline-11  #array-inline-11-0)
                                                       )
                                                      )
                                                     )
                                                     (new $newMsg-0
                                                      (seq
                                                       (seq
                                                        (seq
                                                         (ap "W.start" $newMsg-0)
                                                         (fold #array-inline-11-0 m-1-0
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
                                                           (match false true
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
                                                    (ap ret-1 $res)
                                                   )
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
                                                      (ap literal_props.$.[0] $err-0)
                                                     )
                                                    )
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
                                                   )
                                                  )
                                                 )
                                                )
                                               )
                                              )
                                              (fail :error:)
                                             )
                                            )
                                            (new $array-inline-12
                                             (seq
                                              (ap "Going to add a worker to done workers" $array-inline-12)
                                              (canon w-1.$.worker_id.[0] $array-inline-12  #array-inline-12-0)
                                             )
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
                                               (match false true
                                                (call %init_peer_id% ("run-console" "print") [#array-inline-12-0])
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
                                          (ap w-1 $workers)
                                         )
                                         (seq
                                          (seq
                                           (new $array-inline-13
                                            (seq
                                             (seq
                                              (seq
                                               (seq
                                                (ap "Compute job errored on" $array-inline-13)
                                                (ap w-1.$.worker_id.[0] $array-inline-13)
                                               )
                                               (ap "message:" $array-inline-13)
                                              )
                                              (ap :error:.$.message $array-inline-13)
                                             )
                                             (canon w-1.$.worker_id.[0] $array-inline-13  #array-inline-13-0)
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
                                               (match false true
                                                (call %init_peer_id% ("run-console" "print") [#array-inline-13-0])
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
                                        )
                                       )
                                       (fail :error:)
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
                                )
                                (seq
                                 (ap :error: -if-error-)
                                 (xor
                                  (match :error:.$.error_code 10001
                                   (seq
                                    (new $array-inline-14
                                     (seq
                                      (seq
                                       (ap "Worker was already visited" $array-inline-14)
                                       (ap w-1.$.worker_id.[0] $array-inline-14)
                                      )
                                      (canon w-1.$.host_id $array-inline-14  #array-inline-14-0)
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
                                        (match false true
                                         (call %init_peer_id% ("run-console" "print") [#array-inline-14-0])
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
                          (new $-ephemeral-stream-
                           (new #-ephemeral-canon-
                            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                           )
                          )
                         )
                         (fail :error:)
                        )
                        (next w-1)
                       )
                       (never)
                      )
                     )
                     (new $-ephemeral-stream-
                      (new #-ephemeral-canon-
                       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                      )
                     )
                    )
                    (fail :error:)
                   )
                   (next p-0)
                  )
                  (never)
                 )
                )
                (new $array-inline-15
                 (seq
                  (ap "New yield" $array-inline-15)
                  (canon res-0_gate.$.[0] $array-inline-15  #array-inline-15-0)
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
                   (match false true
                    (call %init_peer_id% ("run-console" "print") [#array-inline-15-0])
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
              (fold #array-inline-0 p-1-0
               (par
                (xor
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (new $array-inline-16
                          (seq
                           (seq
                            (ap "About to yield on parseq disjoint peer" $array-inline-16)
                            (ap p-1-0 $array-inline-16)
                           )
                           (canon p-1-0 $array-inline-16  #array-inline-16-0)
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
                             (match false true
                              (call %init_peer_id% ("run-console" "print") [#array-inline-16-0])
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
                                     (new $array-inline-17
                                      (seq
                                       (ap "is called" $array-inline-17)
                                       (canon p-1-0 $array-inline-17  #array-inline-17-0)
                                      )
                                     )
                                     (new $newMsg-1
                                      (seq
                                       (seq
                                        (seq
                                         (ap "Yield.wait_for" $newMsg-1)
                                         (fold #array-inline-17-0 m-2-0
                                          (seq
                                           (ap m-2-0 $newMsg-1)
                                           (next m-2-0)
                                          )
                                          (null)
                                         )
                                        )
                                        (canon p-1-0 $newMsg-1  #newMsg-1_canon)
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
                                           (match false true
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
                                    (par
                                     (fold $workers w-4-0
                                      (par
                                       (seq
                                        (seq
                                         (seq
                                          (seq
                                           (seq
                                            (seq
                                             (seq
                                              (seq
                                               (seq
                                                (new $array-inline-18
                                                 (seq
                                                  (seq
                                                   (ap "Got a worker" $array-inline-18)
                                                   (ap w-4-0 $array-inline-18)
                                                  )
                                                  (canon p-1-0 $array-inline-18  #array-inline-18-0)
                                                 )
                                                )
                                                (new $newMsg-2
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (ap "Yield.wait_for" $newMsg-2)
                                                    (fold #array-inline-18-0 m-3-0
                                                     (seq
                                                      (ap m-3-0 $newMsg-2)
                                                      (next m-3-0)
                                                     )
                                                     (null)
                                                    )
                                                   )
                                                   (canon p-1-0 $newMsg-2  #newMsg-2_canon)
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
                                                      (match false true
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
                                               (new $array-inline-19
                                                (seq
                                                 (seq
                                                  (seq
                                                   (ap "W.yield" $array-inline-19)
                                                   (ap w-4-0.$.worker_id.[0] $array-inline-19)
                                                  )
                                                  (ap "About to join res!" $array-inline-19)
                                                 )
                                                 (canon p-1-0 $array-inline-19  #array-inline-19-0)
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
                                                  (match false true
                                                   (call %init_peer_id% ("run-console" "print") [#array-inline-19-0])
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
                                                   (canon p-1-0 $res_test  #res_iter_canon)
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
                                                (canon p-1-0 $res_test  #res_result_canon)
                                               )
                                               (ap #res_result_canon res_gate)
                                              )
                                             )
                                            )
                                            (ap [] literal_ap-0)
                                           )
                                           (ap literal_ap-0 literal_props-0)
                                          )
                                          (new $array-inline-20
                                           (seq
                                            (seq
                                             (ap "Errors are" $array-inline-20)
                                             (ap literal_props-0 $array-inline-20)
                                            )
                                            (canon p-1-0 $array-inline-20  #array-inline-20-0)
                                           )
                                          )
                                         )
                                         (new $newMsg-3
                                          (seq
                                           (seq
                                            (seq
                                             (ap "Yield.wait_for" $newMsg-3)
                                             (fold #array-inline-20-0 m-4-0
                                              (seq
                                               (ap m-4-0 $newMsg-3)
                                               (next m-4-0)
                                              )
                                              (null)
                                             )
                                            )
                                            (canon p-1-0 $newMsg-3  #newMsg-3_canon)
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
                                               (match false true
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
                                        (new -if-else-error-
                                         (new -else-error-
                                          (new -if-error-
                                           (xor
                                            (match literal_props-0 []
                                             (ap true $ok)
                                            )
                                            (seq
                                             (ap :error: -if-error-)
                                             (xor
                                              (match :error:.$.error_code 10001
                                               (fold literal_props-0 a-2-0
                                                (seq
                                                 (ap a-2-0 $errors)
                                                 (next a-2-0)
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
                                       (next w-4-0)
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
                                          (canon p-1-0 $ok_test  #ok_iter_canon)
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
                                       (canon p-1-0 $ok_test  #ok_result_canon)
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
                                          (canon p-1-0 $errors_test  #errors_iter_canon)
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
                                       (canon p-1-0 $errors_test  #errors_result_canon)
                                      )
                                      (ap #errors_result_canon errors_gate)
                                     )
                                    )
                                   )
                                  )
                                  (new $array-inline-21
                                   (seq
                                    (ap "Joined" $array-inline-21)
                                    (canon p-1-0 $array-inline-21  #array-inline-21-0)
                                   )
                                  )
                                 )
                                 (new $newMsg-4
                                  (seq
                                   (seq
                                    (seq
                                     (ap "Yield.wait_for" $newMsg-4)
                                     (fold #array-inline-21-0 m-5-0
                                      (seq
                                       (ap m-5-0 $newMsg-4)
                                       (next m-5-0)
                                      )
                                      (null)
                                     )
                                    )
                                    (canon p-1-0 $newMsg-4  #newMsg-4_canon)
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
                                       (match false true
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
                                (canon p-1-0 $errors  #errors_to_functor)
                               )
                               (ap #errors_to_functor.length errors_length)
                              )
                              (call p-1-0 ("cmp" "gte") [errors_length 1] gte)
                             )
                             (new -if-error-
                              (xor
                               (match gte true
                                (seq
                                 (canon p-1-0 $errors  #errors_canon)
                                 (fold #errors_canon a-3-0
                                  (seq
                                   (ap a-3-0 $new_error)
                                   (next a-3-0)
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
                            (canon p-1-0 $new_error  #-new_error-fix-0)
                           )
                           (ap #-new_error-fix-0 -new_error-flat-0)
                          )
                         )
                        )
                       )
                       (fold -new_error-flat-0 a-4-0
                        (seq
                         (ap a-4-0 $errors)
                         (next a-4-0)
                        )
                        (null)
                       )
                      )
                      (new $array-inline-22
                       (seq
                        (seq
                         (ap "Yielded on parseq disjoint peer" $array-inline-22)
                         (ap p-1-0 $array-inline-22)
                        )
                        (canon p-1-0 $array-inline-22  #array-inline-22-0)
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
                         (match false true
                          (call %init_peer_id% ("run-console" "print") [#array-inline-22-0])
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
                    (new $array-inline-23
                     (seq
                      (seq
                       (seq
                        (new $ingoing_test
                         (seq
                          (seq
                           (fold $ingoing ingoing_fold_var
                            (seq
                             (seq
                              (ap ingoing_fold_var $ingoing_test)
                              (canon p-1-0 $ingoing_test  #ingoing_iter_canon)
                             )
                             (xor
                              (match #ingoing_iter_canon.length 1
                               (null)
                              )
                              (next ingoing_fold_var)
                             )
                            )
                            (never)
                           )
                           (canon p-1-0 $ingoing_test  #ingoing_result_canon)
                          )
                          (ap #ingoing_result_canon ingoing_gate)
                         )
                        )
                        (ap ingoing_gate.$.[0] $array-inline-23)
                       )
                       (ap p-1-0 $array-inline-23)
                      )
                      (canon p-1-0 $array-inline-23  #array-inline-23-0)
                     )
                    )
                   )
                   (ap #array-inline-23-0 $outgoing)
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (fail :error:)
                )
                (next p-1-0)
               )
               (never)
              )
             )
             (new $outgoing_test
              (seq
               (seq
                (fold $outgoing outgoing_fold_var
                 (seq
                  (seq
                   (ap outgoing_fold_var $outgoing_test)
                   (canon res-0_gate.$.[0] $outgoing_test  #outgoing_iter_canon)
                  )
                  (xor
                   (match #outgoing_iter_canon.length 1
                    (null)
                   )
                   (next outgoing_fold_var)
                  )
                 )
                 (never)
                )
                (canon res-0_gate.$.[0] $outgoing_test  #outgoing_result_canon)
               )
               (ap #outgoing_result_canon outgoing_gate)
              )
             )
            )
            (new $array-inline-24
             (seq
              (ap "Joined" $array-inline-24)
              (canon res-0_gate.$.[0] $array-inline-24  #array-inline-24-0)
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
               (match false true
                (call %init_peer_id% ("run-console" "print") [#array-inline-24-0])
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
         (mismatch [] []
          (seq
           (new $stream-anon-0
            (new $stream-anon-0
             (seq
              (seq
               (ap "Errors:" $stream-anon-0)
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

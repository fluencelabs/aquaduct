/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.13
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
export const cloudless_script = `
(xor
 (new $res
  (new $observed_on
   (new $workers
    (new $newMsg-15
     (new $ingoing
      (new $newMsg-22
       (new $errors
        (new $outgoing
         (new $res-0
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
                       (seq
                        (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                        (new %Deals_obj_map
                         (seq
                          (ap ("myDeployment" []) %Deals_obj_map)
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
                       (canon %init_peer_id% $array-inline  #$array-inline-0)
                      )
                     )
                    )
                    (new $array-inline-1
                     (seq
                      (ap "Execution begins now" $array-inline-1)
                      (canon %init_peer_id% $array-inline-1  #$array-inline-1-0)
                     )
                    )
                   )
                   (call %init_peer_id% ("run-console" "print") [#$array-inline-1-0])
                  )
                  (new $option-inline
                   (seq
                    (xor
                     (ap -relay- $option-inline)
                     (null)
                    )
                    (canon %init_peer_id% $option-inline  #$option-inline-0)
                   )
                  )
                 )
                 (new -if-else-error-
                  (new -else-error-
                   (new -if-error-
                    (xor
                     (match #$option-inline-0 []
                      (ap -relay- $res-0)
                     )
                     (seq
                      (ap :error: -if-error-)
                      (xor
                       (match :error:.$.error_code 10001
                        (ap #$option-inline-0.$.[0] $res-0)
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
                (new $res-0_test
                 (seq
                  (seq
                   (fold $res-0 res-0_fold_var
                    (seq
                     (seq
                      (ap res-0_fold_var $res-0_test)
                      (canon %init_peer_id% $res-0_test  #$res-0_iter_canon)
                     )
                     (xor
                      (match #$res-0_iter_canon.length 1
                       (null)
                      )
                      (next res-0_fold_var)
                     )
                    )
                    (never)
                   )
                   (canon %init_peer_id% $res-0_test  #$res-0_result_canon)
                  )
                  (ap #$res-0_result_canon res-0_gate)
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
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (new $-hop-
                                   (new #$-hopc-
                                    (canon -relay- $-hop-  #$-hopc-)
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
                                    (canon res-0_gate.$.[0] $array-inline-2  #$array-inline-2-0)
                                   )
                                  )
                                 )
                                 (par
                                  (seq
                                   (new $-hop-
                                    (new #$-hopc-
                                     (canon -relay- $-hop-  #$-hopc-)
                                    )
                                   )
                                   (new -if-error-
                                    (xor
                                     (match true true
                                      (call %init_peer_id% ("run-console" "print") [#$array-inline-2-0])
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
                                (fold #$array-inline-0 p-0
                                 (new $workers-1
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
                                              (canon p-0 $array-inline-3  #$array-inline-3-0)
                                             )
                                            )
                                           )
                                           (par
                                            (seq
                                             (new $-hop-
                                              (new #$-hopc-
                                               (canon -relay- $-hop-  #$-hopc-)
                                              )
                                             )
                                             (new -if-error-
                                              (xor
                                               (match true true
                                                (call %init_peer_id% ("run-console" "print") [#$array-inline-3-0])
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
                                                   (canon p-0 $array-inline-4  #$array-inline-4-0)
                                                  )
                                                 )
                                                 (par
                                                  (seq
                                                   (new $-hop-
                                                    (new #$-hopc-
                                                     (canon -relay- $-hop-  #$-hopc-)
                                                    )
                                                   )
                                                   (new -if-error-
                                                    (xor
                                                     (match true true
                                                      (call %init_peer_id% ("run-console" "print") [#$array-inline-4-0])
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
                                         (canon p-0 $workers-1  #$-workers-fix-0)
                                        )
                                        (ap #$-workers-fix-0 -workers-flat-0)
                                       )
                                       (ap p-0 $ingoing)
                                      )
                                      (fold -workers-flat-0 w-1
                                       (par
                                        (xor
                                         (seq
                                          (new -if-else-error-
                                           (new -else-error-
                                            (new -if-error-
                                             (xor
                                              (match w-1.$.worker_id []
                                               (new $newMsg
                                                (seq
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (seq
                                                     (new $array-inline-5
                                                      (seq
                                                       (seq
                                                        (seq
                                                         (ap "Worker is not defined for host" $array-inline-5)
                                                         (ap w-1.$.host_id $array-inline-5)
                                                        )
                                                        (ap "maybe deal is not funded?" $array-inline-5)
                                                       )
                                                       (canon w-1.$.host_id $array-inline-5  #$array-inline-5-0)
                                                      )
                                                     )
                                                     (ap "Make.disjoint" $newMsg)
                                                    )
                                                    (fold #$array-inline-5-0 m-0
                                                     (seq
                                                      (ap m-0 $newMsg)
                                                      (next m-0)
                                                     )
                                                     (null)
                                                    )
                                                   )
                                                   (canon w-1.$.host_id $newMsg  #$newMsg_canon)
                                                  )
                                                  (par
                                                   (seq
                                                    (new $-hop-
                                                     (new #$-hopc-
                                                      (canon -relay- $-hop-  #$-hopc-)
                                                     )
                                                    )
                                                    (new -if-error-
                                                     (xor
                                                      (match true true
                                                       (call %init_peer_id% ("run-console" "print") [#$newMsg_canon])
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
                                                 (ap "Worker is not defined for host, maybe deal is not funded?" $errors)
                                                )
                                               )
                                              )
                                              (seq
                                               (ap :error: -if-error-)
                                               (xor
                                                (match :error:.$.error_code 10001
                                                 (new $c
                                                  (new $newMsg-0
                                                   (seq
                                                    (seq
                                                     (seq
                                                      (seq
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (seq
                                                           (seq
                                                            (new $array-inline-6
                                                             (seq
                                                              (seq
                                                               (ap "on host" $array-inline-6)
                                                               (ap w-1.$.host_id $array-inline-6)
                                                              )
                                                              (canon w-1.$.host_id $array-inline-6  #$array-inline-6-0)
                                                             )
                                                            )
                                                            (ap "Make.disjoint" $newMsg-0)
                                                           )
                                                           (fold #$array-inline-6-0 m-1-0
                                                            (seq
                                                             (ap m-1-0 $newMsg-0)
                                                             (next m-1-0)
                                                            )
                                                            (null)
                                                           )
                                                          )
                                                          (canon w-1.$.host_id $newMsg-0  #$newMsg-0_canon)
                                                         )
                                                         (par
                                                          (seq
                                                           (new $-hop-
                                                            (new #$-hopc-
                                                             (canon -relay- $-hop-  #$-hopc-)
                                                            )
                                                           )
                                                           (new -if-error-
                                                            (xor
                                                             (match true true
                                                              (call %init_peer_id% ("run-console" "print") [#$newMsg-0_canon])
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
                                                        (canon w-1.$.host_id $observed_on  #$observed_on_canon)
                                                       )
                                                       (fold #$observed_on_canon t-0
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
                                                           (canon w-1.$.host_id $c_test  #$c_iter_canon)
                                                          )
                                                          (xor
                                                           (match #$c_iter_canon.length 1
                                                            (null)
                                                           )
                                                           (next c_fold_var)
                                                          )
                                                         )
                                                         (never)
                                                        )
                                                        (canon w-1.$.host_id $c_test  #$c_result_canon)
                                                       )
                                                       (ap #$c_result_canon c_gate)
                                                      )
                                                     )
                                                    )
                                                    (new -if-else-error-
                                                     (new -else-error-
                                                      (new -if-error-
                                                       (xor
                                                        (match c_gate.$.[0] false
                                                         (new $newMsg-1
                                                          (new $w_is_active
                                                           (new $is_active_opt
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
                                                                        (seq
                                                                         (ap "Worker is" $array-inline-7)
                                                                         (ap w-1.$.worker_id $array-inline-7)
                                                                        )
                                                                        (canon w-1.$.host_id $array-inline-7  #$array-inline-7-0)
                                                                       )
                                                                      )
                                                                      (ap "Make.disjoint" $newMsg-1)
                                                                     )
                                                                     (fold #$array-inline-7-0 m-2-0
                                                                      (seq
                                                                       (ap m-2-0 $newMsg-1)
                                                                       (next m-2-0)
                                                                      )
                                                                      (null)
                                                                     )
                                                                    )
                                                                    (canon w-1.$.host_id $newMsg-1  #$newMsg-1_canon)
                                                                   )
                                                                   (par
                                                                    (seq
                                                                     (new $-hop-
                                                                      (new #$-hopc-
                                                                       (canon -relay- $-hop-  #$-hopc-)
                                                                      )
                                                                     )
                                                                     (new -if-error-
                                                                      (xor
                                                                       (match true true
                                                                        (call %init_peer_id% ("run-console" "print") [#$newMsg-1_canon])
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
                                                                  (ap w-1.$.worker_id.[0] $observed_on)
                                                                 )
                                                                 (xor
                                                                  (new $newMsg-3
                                                                   (new $newMsg-2
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
                                                                               (new $array-inline-8
                                                                                (seq
                                                                                 (ap "Is worker active?" $array-inline-8)
                                                                                 (canon w-1.$.host_id $array-inline-8  #$array-inline-8-0)
                                                                                )
                                                                               )
                                                                               (ap "Make.disjoint" $newMsg-2)
                                                                              )
                                                                              (fold #$array-inline-8-0 m-3-0
                                                                               (seq
                                                                                (ap m-3-0 $newMsg-2)
                                                                                (next m-3-0)
                                                                               )
                                                                               (null)
                                                                              )
                                                                             )
                                                                             (canon w-1.$.host_id $newMsg-2  #$newMsg-2_canon)
                                                                            )
                                                                            (par
                                                                             (seq
                                                                              (new $-hop-
                                                                               (new #$-hopc-
                                                                                (canon -relay- $-hop-  #$-hopc-)
                                                                               )
                                                                              )
                                                                              (new -if-error-
                                                                               (xor
                                                                                (match true true
                                                                                 (call %init_peer_id% ("run-console" "print") [#$newMsg-2_canon])
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
                                                                           (call w-1.$.host_id ("worker" "is_active") [Deals_obj_flat_flat] ret-0)
                                                                          )
                                                                          (ap ret-0 $w_is_active)
                                                                         )
                                                                         (new $array-inline-9
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (ap "Worker is active" $array-inline-9)
                                                                             (canon w-1.$.host_id $w_is_active  #$push-to-stream-354)
                                                                            )
                                                                            (ap #$push-to-stream-354 $array-inline-9)
                                                                           )
                                                                           (canon w-1.$.host_id $array-inline-9  #$array-inline-9-0)
                                                                          )
                                                                         )
                                                                        )
                                                                        (ap "Make.disjoint" $newMsg-3)
                                                                       )
                                                                       (fold #$array-inline-9-0 m-4-0
                                                                        (seq
                                                                         (ap m-4-0 $newMsg-3)
                                                                         (next m-4-0)
                                                                        )
                                                                        (null)
                                                                       )
                                                                      )
                                                                      (canon w-1.$.host_id $newMsg-3  #$newMsg-3_canon)
                                                                     )
                                                                     (par
                                                                      (seq
                                                                       (new $-hop-
                                                                        (new #$-hopc-
                                                                         (canon -relay- $-hop-  #$-hopc-)
                                                                        )
                                                                       )
                                                                       (new -if-error-
                                                                        (xor
                                                                         (match true true
                                                                          (call %init_peer_id% ("run-console" "print") [#$newMsg-3_canon])
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
                                                                  (new $newMsg-4
                                                                   (seq
                                                                    (seq
                                                                     (seq
                                                                      (seq
                                                                       (seq
                                                                        (seq
                                                                         (new $array-inline-10
                                                                          (seq
                                                                           (seq
                                                                            (ap "Cannot check if worker for the deal is active, error: " $array-inline-10)
                                                                            (ap :error:.$.message $array-inline-10)
                                                                           )
                                                                           (canon w-1.$.host_id $array-inline-10  #$array-inline-10-0)
                                                                          )
                                                                         )
                                                                         (ap "Make.disjoint" $newMsg-4)
                                                                        )
                                                                        (fold #$array-inline-10-0 m-5-0
                                                                         (seq
                                                                          (ap m-5-0 $newMsg-4)
                                                                          (next m-5-0)
                                                                         )
                                                                         (null)
                                                                        )
                                                                       )
                                                                       (canon w-1.$.host_id $newMsg-4  #$newMsg-4_canon)
                                                                      )
                                                                      (par
                                                                       (seq
                                                                        (new $-hop-
                                                                         (new #$-hopc-
                                                                          (canon -relay- $-hop-  #$-hopc-)
                                                                         )
                                                                        )
                                                                        (new -if-error-
                                                                         (xor
                                                                          (match true true
                                                                           (call %init_peer_id% ("run-console" "print") [#$newMsg-4_canon])
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
                                                                 )
                                                                )
                                                                (new $w_is_active_test
                                                                 (seq
                                                                  (seq
                                                                   (fold $w_is_active w_is_active_fold_var
                                                                    (seq
                                                                     (seq
                                                                      (ap w_is_active_fold_var $w_is_active_test)
                                                                      (canon w-1.$.host_id $w_is_active_test  #$w_is_active_iter_canon)
                                                                     )
                                                                     (xor
                                                                      (match #$w_is_active_iter_canon.length 1
                                                                       (null)
                                                                      )
                                                                      (next w_is_active_fold_var)
                                                                     )
                                                                    )
                                                                    (never)
                                                                   )
                                                                   (canon w-1.$.host_id $w_is_active_test  #$w_is_active_result_canon)
                                                                  )
                                                                  (ap #$w_is_active_result_canon w_is_active_gate)
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
                                                                         (new $newMsg-5
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (seq
                                                                              (seq
                                                                               (new $array-inline-11
                                                                                (seq
                                                                                 (ap "Prev errors prevent host from executing a worker" $array-inline-11)
                                                                                 (canon w-1.$.host_id $array-inline-11  #$array-inline-11-0)
                                                                                )
                                                                               )
                                                                               (ap "Make.disjoint" $newMsg-5)
                                                                              )
                                                                              (fold #$array-inline-11-0 m-6-0
                                                                               (seq
                                                                                (ap m-6-0 $newMsg-5)
                                                                                (next m-6-0)
                                                                               )
                                                                               (null)
                                                                              )
                                                                             )
                                                                             (canon w-1.$.host_id $newMsg-5  #$newMsg-5_canon)
                                                                            )
                                                                            (par
                                                                             (seq
                                                                              (new $-hop-
                                                                               (new #$-hopc-
                                                                                (canon -relay- $-hop-  #$-hopc-)
                                                                               )
                                                                              )
                                                                              (new -if-error-
                                                                               (xor
                                                                                (match true true
                                                                                 (call %init_peer_id% ("run-console" "print") [#$newMsg-5_canon])
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
                                                                           (ap false $is_active_opt)
                                                                          )
                                                                         )
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
                                                                      (new $newMsg-6
                                                                       (seq
                                                                        (seq
                                                                         (seq
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (new $array-inline-12
                                                                              (seq
                                                                               (ap "Deal is inactive on the host, have you deposited enough funds?" $array-inline-12)
                                                                               (canon w-1.$.host_id $array-inline-12  #$array-inline-12-0)
                                                                              )
                                                                             )
                                                                             (ap "Make.disjoint" $newMsg-6)
                                                                            )
                                                                            (fold #$array-inline-12-0 m-7-0
                                                                             (seq
                                                                              (ap m-7-0 $newMsg-6)
                                                                              (next m-7-0)
                                                                             )
                                                                             (null)
                                                                            )
                                                                           )
                                                                           (canon w-1.$.host_id $newMsg-6  #$newMsg-6_canon)
                                                                          )
                                                                          (par
                                                                           (seq
                                                                            (new $-hop-
                                                                             (new #$-hopc-
                                                                              (canon -relay- $-hop-  #$-hopc-)
                                                                             )
                                                                            )
                                                                            (new -if-error-
                                                                             (xor
                                                                              (match true true
                                                                               (call %init_peer_id% ("run-console" "print") [#$newMsg-6_canon])
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
                                                                    (canon w-1.$.host_id $is_active_opt_test  #$is_active_opt_iter_canon)
                                                                   )
                                                                   (xor
                                                                    (match #$is_active_opt_iter_canon.length 1
                                                                     (null)
                                                                    )
                                                                    (next is_active_opt_fold_var)
                                                                   )
                                                                  )
                                                                  (never)
                                                                 )
                                                                 (canon w-1.$.host_id $is_active_opt_test  #$is_active_opt_result_canon)
                                                                )
                                                                (ap #$is_active_opt_result_canon is_active_opt_gate)
                                                               )
                                                              )
                                                             )
                                                             (new -if-else-error-
                                                              (new -else-error-
                                                               (new -if-error-
                                                                (xor
                                                                 (match is_active_opt_gate.$.[0] true
                                                                  (new $newMsg-7
                                                                   (new $newMsg-8
                                                                    (seq
                                                                     (seq
                                                                      (seq
                                                                       (seq
                                                                        (seq
                                                                         (new $array-inline-13
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (seq
                                                                              (ap "Deal is active, so going go " $array-inline-13)
                                                                              (ap w-1.$.worker_id.[0] $array-inline-13)
                                                                             )
                                                                             (ap "via" $array-inline-13)
                                                                            )
                                                                            (ap w-1.$.host_id $array-inline-13)
                                                                           )
                                                                           (canon w-1.$.host_id $array-inline-13  #$array-inline-13-0)
                                                                          )
                                                                         )
                                                                         (ap "Make.disjoint" $newMsg-7)
                                                                        )
                                                                        (fold #$array-inline-13-0 m-8-0
                                                                         (seq
                                                                          (ap m-8-0 $newMsg-7)
                                                                          (next m-8-0)
                                                                         )
                                                                         (null)
                                                                        )
                                                                       )
                                                                       (canon w-1.$.host_id $newMsg-7  #$newMsg-7_canon)
                                                                      )
                                                                      (par
                                                                       (seq
                                                                        (new $-hop-
                                                                         (new #$-hopc-
                                                                          (canon -relay- $-hop-  #$-hopc-)
                                                                         )
                                                                        )
                                                                        (new -if-error-
                                                                         (xor
                                                                          (match true true
                                                                           (call %init_peer_id% ("run-console" "print") [#$newMsg-7_canon])
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
                                                                         (seq
                                                                          (seq
                                                                           (new $array-inline-14
                                                                            (seq
                                                                             (seq
                                                                              (ap "got compute job on" $array-inline-14)
                                                                              (ap w-1.$.worker_id.[0] $array-inline-14)
                                                                             )
                                                                             (canon w-1.$.worker_id.[0] $array-inline-14  #$array-inline-14-0)
                                                                            )
                                                                           )
                                                                           (ap "Make.disjoint" $newMsg-8)
                                                                          )
                                                                          (fold #$array-inline-14-0 m-9-0
                                                                           (seq
                                                                            (ap m-9-0 $newMsg-8)
                                                                            (next m-9-0)
                                                                           )
                                                                           (null)
                                                                          )
                                                                         )
                                                                         (canon w-1.$.worker_id.[0] $newMsg-8  #$newMsg-8_canon)
                                                                        )
                                                                        (par
                                                                         (seq
                                                                          (seq
                                                                           (new $-hop-
                                                                            (new #$-hopc-
                                                                             (canon w-1.$.host_id $-hop-  #$-hopc-)
                                                                            )
                                                                           )
                                                                           (new $-hop-
                                                                            (new #$-hopc-
                                                                             (canon -relay- $-hop-  #$-hopc-)
                                                                            )
                                                                           )
                                                                          )
                                                                          (new -if-error-
                                                                           (xor
                                                                            (match true true
                                                                             (call %init_peer_id% ("run-console" "print") [#$newMsg-8_canon])
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
                                                                        (new $newMsg-11
                                                                         (new $err-0
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (seq
                                                                              (seq
                                                                               (seq
                                                                                (xor
                                                                                 (new -if-else-error-
                                                                                  (new -else-error-
                                                                                   (new -if-error-
                                                                                    (xor
                                                                                     (match [] []
                                                                                      (new $newMsg-10
                                                                                       (new $newMsg-9
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
                                                                                                   (new $array-inline-15
                                                                                                    (seq
                                                                                                     (seq
                                                                                                      (ap w-1.$.worker_id.[0] $array-inline-15)
                                                                                                      (ap "About to start working" $array-inline-15)
                                                                                                     )
                                                                                                     (canon w-1.$.worker_id.[0] $array-inline-15  #$array-inline-15-0)
                                                                                                    )
                                                                                                   )
                                                                                                   (ap "W.start" $newMsg-9)
                                                                                                  )
                                                                                                  (fold #$array-inline-15-0 m-10-0
                                                                                                   (seq
                                                                                                    (ap m-10-0 $newMsg-9)
                                                                                                    (next m-10-0)
                                                                                                   )
                                                                                                   (null)
                                                                                                  )
                                                                                                 )
                                                                                                 (canon w-1.$.worker_id.[0] $newMsg-9  #$newMsg-9_canon)
                                                                                                )
                                                                                                (par
                                                                                                 (seq
                                                                                                  (seq
                                                                                                   (new $-hop-
                                                                                                    (new #$-hopc-
                                                                                                     (canon w-1.$.host_id $-hop-  #$-hopc-)
                                                                                                    )
                                                                                                   )
                                                                                                   (new $-hop-
                                                                                                    (new #$-hopc-
                                                                                                     (canon -relay- $-hop-  #$-hopc-)
                                                                                                    )
                                                                                                   )
                                                                                                  )
                                                                                                  (new -if-error-
                                                                                                   (xor
                                                                                                    (match true true
                                                                                                     (call %init_peer_id% ("run-console" "print") [#$newMsg-9_canon])
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
                                                                                               (call w-1.$.worker_id.[0] ("myService" "greeting") ["-works-ok-"] ret-1)
                                                                                              )
                                                                                              (new $array-inline-16
                                                                                               (seq
                                                                                                (seq
                                                                                                 (seq
                                                                                                  (ap w-1.$.worker_id.[0] $array-inline-16)
                                                                                                  (ap "MyService.greeting" $array-inline-16)
                                                                                                 )
                                                                                                 (ap ret-1 $array-inline-16)
                                                                                                )
                                                                                                (canon w-1.$.worker_id.[0] $array-inline-16  #$array-inline-16-0)
                                                                                               )
                                                                                              )
                                                                                             )
                                                                                             (ap "W.start" $newMsg-10)
                                                                                            )
                                                                                            (fold #$array-inline-16-0 m-11-0
                                                                                             (seq
                                                                                              (ap m-11-0 $newMsg-10)
                                                                                              (next m-11-0)
                                                                                             )
                                                                                             (null)
                                                                                            )
                                                                                           )
                                                                                           (canon w-1.$.worker_id.[0] $newMsg-10  #$newMsg-10_canon)
                                                                                          )
                                                                                          (par
                                                                                           (seq
                                                                                            (seq
                                                                                             (new $-hop-
                                                                                              (new #$-hopc-
                                                                                               (canon w-1.$.host_id $-hop-  #$-hopc-)
                                                                                              )
                                                                                             )
                                                                                             (new $-hop-
                                                                                              (new #$-hopc-
                                                                                               (canon -relay- $-hop-  #$-hopc-)
                                                                                              )
                                                                                             )
                                                                                            )
                                                                                            (new -if-error-
                                                                                             (xor
                                                                                              (match true true
                                                                                               (call %init_peer_id% ("run-console" "print") [#$newMsg-10_canon])
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
                                                                                         (ap ret-1 $res)
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
                                                                                           (new $-hop-
                                                                                            (new #$-hopc-
                                                                                             (canon w-1.$.host_id $-hop-  #$-hopc-)
                                                                                            )
                                                                                           )
                                                                                          )
                                                                                          (seq
                                                                                           (ap -else-error- -if-else-error-)
                                                                                           (new $-hop-
                                                                                            (new #$-hopc-
                                                                                             (canon w-1.$.host_id $-hop-  #$-hopc-)
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
                                                                                (new $array-inline-17
                                                                                 (seq
                                                                                  (ap "Going to add a worker to done workers" $array-inline-17)
                                                                                  (canon w-1.$.worker_id.[0] $array-inline-17  #$array-inline-17-0)
                                                                                 )
                                                                                )
                                                                               )
                                                                               (ap "Make.disjoint" $newMsg-11)
                                                                              )
                                                                              (fold #$array-inline-17-0 m-12-0
                                                                               (seq
                                                                                (ap m-12-0 $newMsg-11)
                                                                                (next m-12-0)
                                                                               )
                                                                               (null)
                                                                              )
                                                                             )
                                                                             (canon w-1.$.worker_id.[0] $newMsg-11  #$newMsg-11_canon)
                                                                            )
                                                                            (par
                                                                             (seq
                                                                              (seq
                                                                               (new $-hop-
                                                                                (new #$-hopc-
                                                                                 (canon w-1.$.host_id $-hop-  #$-hopc-)
                                                                                )
                                                                               )
                                                                               (new $-hop-
                                                                                (new #$-hopc-
                                                                                 (canon -relay- $-hop-  #$-hopc-)
                                                                                )
                                                                               )
                                                                              )
                                                                              (new -if-error-
                                                                               (xor
                                                                                (match true true
                                                                                 (call %init_peer_id% ("run-console" "print") [#$newMsg-11_canon])
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
                                                                         )
                                                                        )
                                                                        (new $newMsg-12
                                                                         (seq
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (seq
                                                                              (new $array-inline-18
                                                                               (seq
                                                                                (seq
                                                                                 (seq
                                                                                  (seq
                                                                                   (ap "Compute job errored on" $array-inline-18)
                                                                                   (ap w-1.$.worker_id.[0] $array-inline-18)
                                                                                  )
                                                                                  (ap "message:" $array-inline-18)
                                                                                 )
                                                                                 (ap :error:.$.message $array-inline-18)
                                                                                )
                                                                                (canon w-1.$.worker_id.[0] $array-inline-18  #$array-inline-18-0)
                                                                               )
                                                                              )
                                                                              (ap "Make.disjoint" $newMsg-12)
                                                                             )
                                                                             (fold #$array-inline-18-0 m-13-0
                                                                              (seq
                                                                               (ap m-13-0 $newMsg-12)
                                                                               (next m-13-0)
                                                                              )
                                                                              (null)
                                                                             )
                                                                            )
                                                                            (canon w-1.$.worker_id.[0] $newMsg-12  #$newMsg-12_canon)
                                                                           )
                                                                           (par
                                                                            (seq
                                                                             (seq
                                                                              (new $-hop-
                                                                               (new #$-hopc-
                                                                                (canon w-1.$.host_id $-hop-  #$-hopc-)
                                                                               )
                                                                              )
                                                                              (new $-hop-
                                                                               (new #$-hopc-
                                                                                (canon -relay- $-hop-  #$-hopc-)
                                                                               )
                                                                              )
                                                                             )
                                                                             (new -if-error-
                                                                              (xor
                                                                               (match true true
                                                                                (call %init_peer_id% ("run-console" "print") [#$newMsg-12_canon])
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
                                                                   (match :error:.$.error_code 10001
                                                                    (new $newMsg-13
                                                                     (seq
                                                                      (seq
                                                                       (seq
                                                                        (seq
                                                                         (new $array-inline-19
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (seq
                                                                              (ap "Cannot prepare worker" $array-inline-19)
                                                                              (ap w-1.$.worker_id $array-inline-19)
                                                                             )
                                                                             (ap "on host" $array-inline-19)
                                                                            )
                                                                            (ap w-1.$.host_id $array-inline-19)
                                                                           )
                                                                           (canon w-1.$.host_id $array-inline-19  #$array-inline-19-0)
                                                                          )
                                                                         )
                                                                         (ap "Make.disjoint" $newMsg-13)
                                                                        )
                                                                        (fold #$array-inline-19-0 m-14-0
                                                                         (seq
                                                                          (ap m-14-0 $newMsg-13)
                                                                          (next m-14-0)
                                                                         )
                                                                         (null)
                                                                        )
                                                                       )
                                                                       (canon w-1.$.host_id $newMsg-13  #$newMsg-13_canon)
                                                                      )
                                                                      (par
                                                                       (seq
                                                                        (new $-hop-
                                                                         (new #$-hopc-
                                                                          (canon -relay- $-hop-  #$-hopc-)
                                                                         )
                                                                        )
                                                                        (new -if-error-
                                                                         (xor
                                                                          (match true true
                                                                           (call %init_peer_id% ("run-console" "print") [#$newMsg-13_canon])
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
                                                                   (seq
                                                                    (seq
                                                                     (ap :error: -else-error-)
                                                                     (xor
                                                                      (seq
                                                                       (match :error:.$.error_code 10001
                                                                        (ap -if-error- -if-else-error-)
                                                                       )
                                                                       (new $-hop-
                                                                        (new #$-hopc-
                                                                         (canon -relay- $-hop-  #$-hopc-)
                                                                        )
                                                                       )
                                                                      )
                                                                      (seq
                                                                       (ap -else-error- -if-else-error-)
                                                                       (new $-hop-
                                                                        (new #$-hopc-
                                                                         (canon -relay- $-hop-  #$-hopc-)
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
                                                           )
                                                          )
                                                         )
                                                        )
                                                        (seq
                                                         (ap :error: -if-error-)
                                                         (xor
                                                          (match :error:.$.error_code 10001
                                                           (new $newMsg-14
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (new $array-inline-20
                                                                 (seq
                                                                  (seq
                                                                   (ap "Worker was already visited" $array-inline-20)
                                                                   (ap w-1.$.worker_id.[0] $array-inline-20)
                                                                  )
                                                                  (canon w-1.$.host_id $array-inline-20  #$array-inline-20-0)
                                                                 )
                                                                )
                                                                (ap "Make.disjoint" $newMsg-14)
                                                               )
                                                               (fold #$array-inline-20-0 m-15-0
                                                                (seq
                                                                 (ap m-15-0 $newMsg-14)
                                                                 (next m-15-0)
                                                                )
                                                                (null)
                                                               )
                                                              )
                                                              (canon w-1.$.host_id $newMsg-14  #$newMsg-14_canon)
                                                             )
                                                             (par
                                                              (seq
                                                               (new $-hop-
                                                                (new #$-hopc-
                                                                 (canon -relay- $-hop-  #$-hopc-)
                                                                )
                                                               )
                                                               (new -if-error-
                                                                (xor
                                                                 (match true true
                                                                  (call %init_peer_id% ("run-console" "print") [#$newMsg-14_canon])
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
                                                          (seq
                                                           (seq
                                                            (ap :error: -else-error-)
                                                            (xor
                                                             (seq
                                                              (match :error:.$.error_code 10001
                                                               (ap -if-error- -if-else-error-)
                                                              )
                                                              (new $-hop-
                                                               (new #$-hopc-
                                                                (canon -relay- $-hop-  #$-hopc-)
                                                               )
                                                              )
                                                             )
                                                             (seq
                                                              (ap -else-error- -if-else-error-)
                                                              (new $-hop-
                                                               (new #$-hopc-
                                                                (canon -relay- $-hop-  #$-hopc-)
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
                                                    (new $-hop-
                                                     (new #$-hopc-
                                                      (canon -relay- $-hop-  #$-hopc-)
                                                     )
                                                    )
                                                   )
                                                   (seq
                                                    (ap -else-error- -if-else-error-)
                                                    (new $-hop-
                                                     (new #$-hopc-
                                                      (canon -relay- $-hop-  #$-hopc-)
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
                                          (new $-hop-
                                           (new #$-hopc-
                                            (canon -relay- $-hop-  #$-hopc-)
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
                                     (new $-hop-
                                      (new #$-hopc-
                                       (canon -relay- $-hop-  #$-hopc-)
                                      )
                                     )
                                    )
                                    (fail :error:)
                                   )
                                   (next p-0)
                                  )
                                 )
                                 (never)
                                )
                               )
                               (new $array-inline-21
                                (seq
                                 (ap "New yield" $array-inline-21)
                                 (canon res-0_gate.$.[0] $array-inline-21  #$array-inline-21-0)
                                )
                               )
                              )
                              (ap "Make.disjoint" $newMsg-15)
                             )
                             (fold #$array-inline-21-0 m-16-0
                              (seq
                               (ap m-16-0 $newMsg-15)
                               (next m-16-0)
                              )
                              (null)
                             )
                            )
                            (canon res-0_gate.$.[0] $newMsg-15  #$newMsg-15_canon)
                           )
                           (par
                            (seq
                             (new $-hop-
                              (new #$-hopc-
                               (canon -relay- $-hop-  #$-hopc-)
                              )
                             )
                             (new -if-error-
                              (xor
                               (match true true
                                (call %init_peer_id% ("run-console" "print") [#$newMsg-15_canon])
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
                          (fold #$array-inline-0 p-2-0
                           (new $ok
                            (new $newMsg-16
                             (new $newMsg-21
                              (new $new_error
                               (new $newMsg-17
                                (new $newMsg-20
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
                                                                  (new $array-inline-22
                                                                   (seq
                                                                    (seq
                                                                     (ap "About to yield on parseq disjoint peer" $array-inline-22)
                                                                     (ap p-2-0 $array-inline-22)
                                                                    )
                                                                    (canon p-2-0 $array-inline-22  #$array-inline-22-0)
                                                                   )
                                                                  )
                                                                  (ap "Make.disjoint" $newMsg-16)
                                                                 )
                                                                 (fold #$array-inline-22-0 m-17-0
                                                                  (seq
                                                                   (ap m-17-0 $newMsg-16)
                                                                   (next m-17-0)
                                                                  )
                                                                  (null)
                                                                 )
                                                                )
                                                                (canon p-2-0 $newMsg-16  #$newMsg-16_canon)
                                                               )
                                                               (par
                                                                (seq
                                                                 (new $-hop-
                                                                  (new #$-hopc-
                                                                   (canon -relay- $-hop-  #$-hopc-)
                                                                  )
                                                                 )
                                                                 (new -if-error-
                                                                  (xor
                                                                   (match true true
                                                                    (call %init_peer_id% ("run-console" "print") [#$newMsg-16_canon])
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
                                                                (ap "is called" $array-inline-23)
                                                                (canon p-2-0 $array-inline-23  #$array-inline-23-0)
                                                               )
                                                              )
                                                             )
                                                             (ap "Yield.wait_for" $newMsg-17)
                                                            )
                                                            (fold #$array-inline-23-0 m-18-0
                                                             (seq
                                                              (ap m-18-0 $newMsg-17)
                                                              (next m-18-0)
                                                             )
                                                             (null)
                                                            )
                                                           )
                                                           (canon p-2-0 $newMsg-17  #$newMsg-17_canon)
                                                          )
                                                          (par
                                                           (seq
                                                            (new $-hop-
                                                             (new #$-hopc-
                                                              (canon -relay- $-hop-  #$-hopc-)
                                                             )
                                                            )
                                                            (new -if-error-
                                                             (xor
                                                              (match true true
                                                               (call %init_peer_id% ("run-console" "print") [#$newMsg-17_canon])
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
                                                          (fold $workers w-4-0
                                                           (new $newMsg-18
                                                            (new $newMsg-19
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
                                                                       (seq
                                                                        (seq
                                                                         (seq
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (new $array-inline-24
                                                                              (seq
                                                                               (seq
                                                                                (ap "Got a worker" $array-inline-24)
                                                                                (ap w-4-0 $array-inline-24)
                                                                               )
                                                                               (canon p-2-0 $array-inline-24  #$array-inline-24-0)
                                                                              )
                                                                             )
                                                                             (ap "Yield.wait_for" $newMsg-18)
                                                                            )
                                                                            (fold #$array-inline-24-0 m-19-0
                                                                             (seq
                                                                              (ap m-19-0 $newMsg-18)
                                                                              (next m-19-0)
                                                                             )
                                                                             (null)
                                                                            )
                                                                           )
                                                                           (canon p-2-0 $newMsg-18  #$newMsg-18_canon)
                                                                          )
                                                                          (par
                                                                           (seq
                                                                            (new $-hop-
                                                                             (new #$-hopc-
                                                                              (canon -relay- $-hop-  #$-hopc-)
                                                                             )
                                                                            )
                                                                            (new -if-error-
                                                                             (xor
                                                                              (match true true
                                                                               (call %init_peer_id% ("run-console" "print") [#$newMsg-18_canon])
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
                                                                         (new $array-inline-25
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (ap "W.yield" $array-inline-25)
                                                                             (ap w-4-0.$.worker_id.[0] $array-inline-25)
                                                                            )
                                                                            (ap "About to join res!" $array-inline-25)
                                                                           )
                                                                           (canon p-2-0 $array-inline-25  #$array-inline-25-0)
                                                                          )
                                                                         )
                                                                        )
                                                                        (par
                                                                         (seq
                                                                          (new $-hop-
                                                                           (new #$-hopc-
                                                                            (canon -relay- $-hop-  #$-hopc-)
                                                                           )
                                                                          )
                                                                          (new -if-error-
                                                                           (xor
                                                                            (match true true
                                                                             (call %init_peer_id% ("run-console" "print") [#$array-inline-25-0])
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
                                                                             (canon p-2-0 $res_test  #$res_iter_canon)
                                                                            )
                                                                            (xor
                                                                             (match #$res_iter_canon.length 1
                                                                              (null)
                                                                             )
                                                                             (next res_fold_var)
                                                                            )
                                                                           )
                                                                           (never)
                                                                          )
                                                                          (canon p-2-0 $res_test  #$res_result_canon)
                                                                         )
                                                                         (ap #$res_result_canon res_gate)
                                                                        )
                                                                       )
                                                                      )
                                                                      (ap [] literal_ap-0)
                                                                     )
                                                                     (ap literal_ap-0 literal_props-0)
                                                                    )
                                                                    (new $array-inline-26
                                                                     (seq
                                                                      (seq
                                                                       (ap "Errors are" $array-inline-26)
                                                                       (ap literal_props-0 $array-inline-26)
                                                                      )
                                                                      (canon p-2-0 $array-inline-26  #$array-inline-26-0)
                                                                     )
                                                                    )
                                                                   )
                                                                   (ap "Yield.wait_for" $newMsg-19)
                                                                  )
                                                                  (fold #$array-inline-26-0 m-20-0
                                                                   (seq
                                                                    (ap m-20-0 $newMsg-19)
                                                                    (next m-20-0)
                                                                   )
                                                                   (null)
                                                                  )
                                                                 )
                                                                 (canon p-2-0 $newMsg-19  #$newMsg-19_canon)
                                                                )
                                                                (par
                                                                 (seq
                                                                  (new $-hop-
                                                                   (new #$-hopc-
                                                                    (canon -relay- $-hop-  #$-hopc-)
                                                                   )
                                                                  )
                                                                  (new -if-error-
                                                                   (xor
                                                                    (match true true
                                                                     (call %init_peer_id% ("run-console" "print") [#$newMsg-19_canon])
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
                                                            )
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
                                                               (canon p-2-0 $ok_test  #$ok_iter_canon)
                                                              )
                                                              (xor
                                                               (match #$ok_iter_canon.length 1
                                                                (null)
                                                               )
                                                               (next ok_fold_var)
                                                              )
                                                             )
                                                             (never)
                                                            )
                                                            (canon p-2-0 $ok_test  #$ok_result_canon)
                                                           )
                                                           (ap #$ok_result_canon ok_gate)
                                                          )
                                                         )
                                                         (new $errors_test
                                                          (seq
                                                           (seq
                                                            (fold $errors errors_fold_var
                                                             (seq
                                                              (seq
                                                               (ap errors_fold_var $errors_test)
                                                               (canon p-2-0 $errors_test  #$errors_iter_canon)
                                                              )
                                                              (xor
                                                               (match #$errors_iter_canon.length 1
                                                                (null)
                                                               )
                                                               (next errors_fold_var)
                                                              )
                                                             )
                                                             (never)
                                                            )
                                                            (canon p-2-0 $errors_test  #$errors_result_canon)
                                                           )
                                                           (ap #$errors_result_canon errors_gate)
                                                          )
                                                         )
                                                        )
                                                       )
                                                       (new $array-inline-27
                                                        (seq
                                                         (seq
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (ap "Joined" $array-inline-27)
                                                               (canon p-2-0 $errors  #$push-to-stream-1043)
                                                              )
                                                              (ap #$push-to-stream-1043 $array-inline-27)
                                                             )
                                                             (canon p-2-0 $errors  #$errors_to_functor)
                                                            )
                                                            (ap #$errors_to_functor.length errors_length)
                                                           )
                                                           (ap errors_length $array-inline-27)
                                                          )
                                                          (ap 1 $array-inline-27)
                                                         )
                                                         (canon p-2-0 $array-inline-27  #$array-inline-27-0)
                                                        )
                                                       )
                                                      )
                                                      (ap "Yield.wait_for" $newMsg-20)
                                                     )
                                                     (fold #$array-inline-27-0 m-21-0
                                                      (seq
                                                       (ap m-21-0 $newMsg-20)
                                                       (next m-21-0)
                                                      )
                                                      (null)
                                                     )
                                                    )
                                                    (canon p-2-0 $newMsg-20  #$newMsg-20_canon)
                                                   )
                                                   (par
                                                    (seq
                                                     (new $-hop-
                                                      (new #$-hopc-
                                                       (canon -relay- $-hop-  #$-hopc-)
                                                      )
                                                     )
                                                     (new -if-error-
                                                      (xor
                                                       (match true true
                                                        (call %init_peer_id% ("run-console" "print") [#$newMsg-20_canon])
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
                                                  (canon p-2-0 $errors  #$errors_to_functor-0)
                                                 )
                                                 (ap #$errors_to_functor-0.length errors_length-0)
                                                )
                                                (call p-2-0 ("cmp" "gte") [errors_length-0 1] gte)
                                               )
                                               (new -if-error-
                                                (xor
                                                 (match gte true
                                                  (seq
                                                   (canon p-2-0 $errors  #$errors_canon)
                                                   (fold #$errors_canon a-3-0
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
                                              (canon p-2-0 $new_error  #$-new_error-fix-0)
                                             )
                                             (ap #$-new_error-fix-0 -new_error-flat-0)
                                            )
                                            (fold -new_error-flat-0 a-4-0
                                             (seq
                                              (ap a-4-0 $errors)
                                              (next a-4-0)
                                             )
                                             (null)
                                            )
                                           )
                                           (new $array-inline-28
                                            (seq
                                             (seq
                                              (ap "Yielded on parseq disjoint peer" $array-inline-28)
                                              (ap p-2-0 $array-inline-28)
                                             )
                                             (canon p-2-0 $array-inline-28  #$array-inline-28-0)
                                            )
                                           )
                                          )
                                          (ap "Make.disjoint" $newMsg-21)
                                         )
                                         (fold #$array-inline-28-0 m-22-0
                                          (seq
                                           (ap m-22-0 $newMsg-21)
                                           (next m-22-0)
                                          )
                                          (null)
                                         )
                                        )
                                        (canon p-2-0 $newMsg-21  #$newMsg-21_canon)
                                       )
                                       (par
                                        (seq
                                         (new $-hop-
                                          (new #$-hopc-
                                           (canon -relay- $-hop-  #$-hopc-)
                                          )
                                         )
                                         (new -if-error-
                                          (xor
                                           (match true true
                                            (call %init_peer_id% ("run-console" "print") [#$newMsg-21_canon])
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
                                      (new $array-inline-29
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
                                                (canon p-2-0 $ingoing_test  #$ingoing_iter_canon)
                                               )
                                               (xor
                                                (match #$ingoing_iter_canon.length 1
                                                 (null)
                                                )
                                                (next ingoing_fold_var)
                                               )
                                              )
                                              (never)
                                             )
                                             (canon p-2-0 $ingoing_test  #$ingoing_result_canon)
                                            )
                                            (ap #$ingoing_result_canon ingoing_gate)
                                           )
                                          )
                                          (ap ingoing_gate.$.[0] $array-inline-29)
                                         )
                                         (ap p-2-0 $array-inline-29)
                                        )
                                        (canon p-2-0 $array-inline-29  #$array-inline-29-0)
                                       )
                                      )
                                     )
                                     (ap #$array-inline-29-0 $outgoing)
                                    )
                                    (new $-hop-
                                     (new #$-hopc-
                                      (canon -relay- $-hop-  #$-hopc-)
                                     )
                                    )
                                   )
                                   (fail :error:)
                                  )
                                  (next p-2-0)
                                 )
                                )
                               )
                              )
                             )
                            )
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
                               (canon res-0_gate.$.[0] $outgoing_test  #$outgoing_iter_canon)
                              )
                              (xor
                               (match #$outgoing_iter_canon.length 1
                                (null)
                               )
                               (next outgoing_fold_var)
                              )
                             )
                             (never)
                            )
                            (canon res-0_gate.$.[0] $outgoing_test  #$outgoing_result_canon)
                           )
                           (ap #$outgoing_result_canon outgoing_gate)
                          )
                         )
                        )
                        (new $array-inline-30
                         (seq
                          (ap "Joined" $array-inline-30)
                          (canon res-0_gate.$.[0] $array-inline-30  #$array-inline-30-0)
                         )
                        )
                       )
                       (ap "Make.disjoint" $newMsg-22)
                      )
                      (fold #$array-inline-30-0 m-23-0
                       (seq
                        (ap m-23-0 $newMsg-22)
                        (next m-23-0)
                       )
                       (null)
                      )
                     )
                     (canon res-0_gate.$.[0] $newMsg-22  #$newMsg-22_canon)
                    )
                    (par
                     (seq
                      (new $-hop-
                       (new #$-hopc-
                        (canon -relay- $-hop-  #$-hopc-)
                       )
                      )
                      (new -if-error-
                       (xor
                        (match true true
                         (call %init_peer_id% ("run-console" "print") [#$newMsg-22_canon])
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
                   (canon res-0_gate.$.[0] $errors  #$-errors-fix-0)
                  )
                  (ap #$-errors-fix-0 -errors-flat-0)
                 )
                 (new $-hop-
                  (new #$-hopc-
                   (canon -relay- $-hop-  #$-hopc-)
                  )
                 )
                )
                (seq
                 (seq
                  (new $-hop-
                   (new #$-hopc-
                    (canon -relay- $-hop-  #$-hopc-)
                   )
                  )
                  (new $-hop-
                   (new #$-hopc-
                    (canon %init_peer_id% $-hop-  #$-hopc-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
              )
              (new -if-error-
               (xor
                (mismatch -errors-flat-0 []
                 (new $stream-anon-0
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap "Errors:" $stream-anon-0)
                      (fold -errors-flat-0 a-5-0
                       (seq
                        (ap a-5-0 $stream-anon-0)
                        (next a-5-0)
                       )
                       (null)
                      )
                     )
                     (canon %init_peer_id% $stream-anon-0  #$-new_stream-fix-0)
                    )
                    (ap #$-new_stream-fix-0 -new_stream-flat-0)
                   )
                   (call %init_peer_id% ("run-console" "print") [-new_stream-flat-0])
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
             (canon %init_peer_id% $res  #$-res-fix-0)
            )
            (ap #$-res-fix-0 -res-flat-0)
           )
           (call %init_peer_id% ("callbackSrv" "response") [-res-flat-0])
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
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function cloudless(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "cloudless",
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
        cloudless_script
    );
}

/* Count Odd Numbers in an Interval Range
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive). */

// var countOdds = function (low, high) {
//   const numbers = [];
//   const OddNumbers = [];
//   for (let i = low; i <= high; i++) {
//     numbers.push(i);
//   }
//   for (let number = 0; number < numbers.length; number++) {
//     const element = numbers[number];
//     if (element % 2 !== 0) {
//       OddNumbers.push(element);
//     }
//   }
//   return OddNumbers.length;
// };
// <--- Last few GCs --->
// [33:0x5678180]      612 ms: Mark-sweep (reduce) 130.1 (134.8) -> 79.7 (81.4) MB, 15.2 / 0.0 ms  (+ 0.0 ms in 0 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 16 ms) (average mu = 0.787, current mu = 0.827) last resort G[33:0x5678180]      626 ms: Mark-sweep (reduce) 79.7 (81.4) -> 79.7 (81.4) MB, 13.2 / 0.0 ms  (average mu = 0.656, current mu = 0.001) last resort GC in old space requested
// <--- JS stacktrace --->
// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
//  1: 0xb00e10 node::Abort() [nodejs run]
//  2: 0xa1823b node::FatalError(char const*, char const*) [nodejs run]
//  3: 0xcee09e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [nodejs run]
//  4: 0xcee417 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [nodejs run]
//  5: 0xea65d5  [nodejs run]
//  6: 0xeb8a58 v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [nodejs run]
//  7: 0xe79b12 v8::internal::Factory::AllocateRaw(int, v8::internal::AllocationType, v8::internal::AllocationAlignment) [nodejs run]
//  8: 0xe7443c v8::internal::FactoryBase<v8::internal::Factory>::AllocateRawArray(int, v8::internal::AllocationType) [nodejs run]
//  9: 0xe74515 v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArrayWithFiller(v8::internal::Handle<v8::internal::Map>, int, v8::internal::Handle<v8::internal::Oddball>, v8::internal::AllocationType) [nodejs run]
// 10: 0x10221b2  [nodejs run]
// 11: 0x1022af6  [nodejs run]
// 12: 0x11e3783 v8::internal::Runtime_GrowArrayElements(int, unsigned long*, v8::internal::Isolate*) [nodejs run]
// 13: 0x15e7cf9  [nodejs run]

// countOdds(1, 10);
console.log(countOdds(3, 7));


var countOdds = function (low, high) {
  const numbers = [];
  const OddNumbers = [];
  for (let i = low; i <= high; i++) {
    numbers.push(i);
  }
  for (let number = 0; number < numbers.length; number++) {
    const element = numbers[number];
    if (element % 2 !== 0) {
      OddNumbers.push(element);
    }
  }
  return OddNumbers.length;
};
/* 
Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain. */


function distributeCandies(candies: number[]): number {
  const halfCandiesLen = candies.length / 2
  const uniqueLen = new Set(candies).size
  return uniqueLen > halfCandiesLen ? halfCandiesLen : uniqueLen
};
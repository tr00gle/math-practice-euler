defmodule Euler.Problem1 do
  @moduledoc """
    This module solves Project Euler Problem 1.
    It should find the sum of all the natural numbers divisible by 3 or 5 that are less than x (default value of 1000).
  """

  @spec solve(non_neg_integer()) :: non_neg_integer()
  def solve(x \\ 1000), do: Enum.reduce(0..(x - 1), &add/2)

  defp add(num, sum) when rem(num, 3) == 0 or rem(num, 5) == 0, do: num + sum
  defp add(_, sum), do: sum
end

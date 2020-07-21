defmodule Euler.Problem2 do
  @moduledoc """
  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
  """
  @upper_bound 4_000_000

  def solve() do
    sum_fib(0, 2, 1)
  end

  defp sum_fib(sum, current, _previous) when current > @upper_bound, do: sum

  defp sum_fib(sum, current, previous) when rem(current, 2) == 0 do
    sum_fib(sum + current, current + previous, current)
  end

  defp sum_fib(sum, current, previous), do: sum_fib(sum, current + previous, current)
end

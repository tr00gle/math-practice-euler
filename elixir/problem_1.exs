defmodule Problem1 do
  @moduledoc """
    This module is responsible for solving Problem 1 of Project Euler.
    It should find the sum of all the natural numbers divisible by 3 or 5 that are less than x (default value of 1000).
  """
  
  @spec problem_1(non_neg_integer()) :: non_neg_integer()
  def problem_1(x \\ 1000), do: Enum.reduce(0..x - 1, &add/2)

  defp add(num, sum) when rem(num, 3) == 0 or rem(num, 5) == 0, do: num + sum
  defp add(_, sum), do: sum
end

ExUnit.start()

defmodule Day1Test do
  use ExUnit.Case

  import Problem1

  test "sum all multiples of 3 or 5 below 1000" do
    assert problem_1() == 233168
  end
end

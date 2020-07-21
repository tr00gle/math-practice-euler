defmodule Euler.Problem1Test do
  use ExUnit.Case

  test "sum all multiples of 3 or 5 below 1000" do
    assert Euler.Problem1.solve() == 233_168
  end
end

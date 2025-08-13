defmodule Enterprise.MixProject do
  use Mix.Project

  def project do
    [
      app: :enterprise,
      version: "0.1.0",
      elixir: "~> 1.14",
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:phoenix, "~> 1.7.0"},
      {:phoenix_html, "~> 3.0"},
      {:ecto_sql, "~> 3.0"},
      {:postgrex, ">= 0.0.0"}
    ]
  end
end

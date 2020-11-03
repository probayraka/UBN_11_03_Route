export function HeaderTop() {
    return React.createElement(
        "div",
        { className: "header-top" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "a",
                { href: "/" },
                React.createElement("img", { className: "header-logo", src: "./static/img/logo.png", alt: "LOGO" })
            ),
            React.createElement(
                "div",
                { className: "header-right" },
                React.createElement(
                    "form",
                    { className: "header-class", action: "/search_value", method: "get", id: "search-form" },
                    React.createElement("input", { className: "search-input", id: "search-input", type: "text", name: "q", autoComplete: "off" }),
                    React.createElement(
                        "div",
                        { className: "search-button-back" },
                        React.createElement("input", { className: "search-button", type: "submit", value: "" })
                    )
                ),
                React.createElement(
                    "a",
                    { href: "", className: "weather1", "data-toggle": "modal", "data-target": ".add-weather" },
                    React.createElement(
                        "span",
                        { className: "header-widget" },
                        React.createElement("img", { className: "weather2", src: "./static/img/icon_weather.png" }),
                        React.createElement(
                            "span",
                            { className: "header-widget-text" },
                            React.createElement(
                                "span",
                                { className: "text-large" },
                                "27"
                            ),
                            React.createElement(
                                "span",
                                { className: "text-mini" },
                                "\u0423\u041B\u0410\u0410\u041D\u0411\u0410\u0410\u0422\u0410\u0420"
                            )
                        )
                    )
                )
            )
        )
    );
}
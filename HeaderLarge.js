var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

export function HeaderLarge() {
    var _React$useState = React.useState(true),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        loading = _React$useState2[0],
        setLoading = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        data = _React$useState4[0],
        setData = _React$useState4[1];

    var req = new XMLHttpRequest();
    req.open('POST', 'https://mutp1-84a96.firebaseio.com/tses.json');
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = function () {
        console.log('res', req.response);
    };
    // req.send(JSON.stringify({tsesElement: 'нмйгэм'}));
    // req.send(JSON.stringify({imageSrc: './static/img/lmao.png'}));
    if (loading) {
        var _req = new XMLHttpRequest();
        _req.open('GET', 'https://mutp1-84a96.firebaseio.com/tses.json');
        _req.responseType = "json";
        _req.onload = function () {
            var res = _req.response;console.log('res', res);
            setLoading(false);
            var d = [];
            for (var property in res) {
                // console.log(`${property}: ${ res[property].menuItem }`);
                if (res[property].tsesElement) {
                    console.log(res[property].tsesElement);
                    d.push(React.createElement(
                        'li',
                        { key: property },
                        ' ',
                        React.createElement(
                            'a',
                            { href: '/' },
                            res[property].tsesElement
                        )
                    ));
                } else if (res[property].imageSrc) {
                    console.log(res[property].imageSrc);
                    d.push(React.createElement(
                        'li',
                        { className: 'active', key: property },
                        ' ',
                        React.createElement(
                            'a',
                            { href: '/' },
                            React.createElement('img', { style: { width: "100px" }, src: res[property].imageSrc })
                        )
                    ));
                } else if (res[property].imagesrcc) {
                    console.log(res[property].imagesrcc);
                    d.push(React.createElement(
                        'li',
                        { className: 'active', key: property },
                        ' ',
                        React.createElement(
                            'a',
                            { href: '/' },
                            React.createElement('img', { src: res[property].imagesrcc })
                        )
                    ));
                }
            } //console.dir(d);
            setData(d);
        };
        _req.send();
    }

    return React.createElement(
        'div',
        { className: 'header-large' },
        React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'news-category-nav large' },
                React.createElement(
                    'ul',
                    null,
                    data
                )
            )
        )
    );
}
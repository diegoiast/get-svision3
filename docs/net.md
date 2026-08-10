# Network

We have a small API for sending networks requets. Its a simple wrapper arround
[libcurl](https://curl.se/libcurl/).


``` cpp
// This is a non blocking call. When it finished, callback will be executed
toolkit::net::fetch_async(req, [&](toolkit::net::HttpResponse resp) {
    // This callback is called on the main thread.
    if (!resp.ok()) {
        spdlog::error("HTTP error for {}: {} (status {})", ticker, resp.error,resp.status_code);
        return;
    }

    // Now you have
    //  - resp.body
    //  - resp.status_code
    //  - resp.headers (pair, name->value)
});
```

API design is still very early, and I am thinking about better use cases and
better APIs.

:::note
On Linux and macOS the library builds a local libcurl version. However - on Windows
it is possible to use the local http stack instead of curl. Sematics will be
slightly different when I (timeouts are calculated differently).

In current implementation, even on Windows, libcurl is the backend. This might change.
:::

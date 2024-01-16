window.BENCHMARK_DATA = {
  "lastUpdate": 1705392160578,
  "repoUrl": "https://github.com/pheerai/microsoft-authentication-library-for-js",
  "entries": {
    "msal-node client-credential Regression Test": [
      {
        "commit": {
          "author": {
            "email": "hemoral@microsoft.com",
            "name": "Hector Morales",
            "username": "hectormmg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "603098e62124b90c13dcd6e57a7d83d95cc07ce8",
          "message": "Fix default sample static file paths (#6786)",
          "timestamp": "2024-01-09T15:37:23-08:00",
          "tree_id": "cb1d11ab2471cb02ae4369e3a3cc53dca4d94e11",
          "url": "https://github.com/pheerai/microsoft-authentication-library-for-js/commit/603098e62124b90c13dcd6e57a7d83d95cc07ce8"
        },
        "date": 1705392158965,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 202853,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "234 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 198785,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "231 samples"
          }
        ]
      }
    ]
  }
}
var ScalaMeter = (function(parent) {
  var my = { name: "data" };
  my.index = [{"scope" : ["Uri-Rendering", "path-length"], "name" : "Test-0", "file" : "..\/Uri-Rendering.path-length.Test-0.dsv"}, {"scope" : ["Uri-Rendering", "domain-length"], "name" : "Test-1", "file" : "..\/Uri-Rendering.domain-length.Test-1.dsv"}, {"scope" : ["Uri-Rendering", "query-string-key-length"], "name" : "Test-2", "file" : "..\/Uri-Rendering.query-string-key-length.Test-2.dsv"}, {"scope" : ["Uri-Rendering", "query-string-value-length"], "name" : "Test-3", "file" : "..\/Uri-Rendering.query-string-value-length.Test-3.dsv"}, {"scope" : ["Uri-Rendering", "number-of-query-string-pairs"], "name" : "Test-4", "file" : "..\/Uri-Rendering.number-of-query-string-pairs.Test-4.dsv"}];
  my.tsvData = ['date	param-String Length	value	success	cilo	cihi	units	complete\n2013-10-12T17:55:51Z	1	0.07844444444444447	true	0.044	0.113	ms	"0.049 0.035 0.085 0.085 0.05 0.035 0.058 0.112 0.068 0.051 0.086 0.142 0.068 0.049 0.086 0.114 0.059 0.048 0.074 0.099 0.069 0.05 0.082 0.106 0.067 0.051 0.081 0.16 0.068 0.051 0.084 0.144 0.071 0.051 0.085 0.151"\n2013-10-12T17:55:51Z	2001	0.35997222222222214	true	0.258	0.462	ms	"0.246 0.239 0.28 0.26 0.4 0.407 0.461 0.406 0.429 0.404 0.456 0.435 0.325 0.248 0.285 0.263 0.408 0.409 0.469 0.547 0.404 0.4 0.468 0.549 0.429 0.41 0.494 0.261 0.245 0.257 0.3 0.262 0.272 0.24 0.282 0.309"\n2013-10-12T17:55:51Z	4001	0.6082500000000001	true	0.448	0.768	ms	"0.728 0.714 0.453 0.45 0.6 0.439 0.634 0.735 0.431 0.436 0.457 0.458 0.725 0.747 0.778 0.778 0.759 0.747 0.747 0.764 0.458 0.749 0.767 0.73 0.73 0.752 0.782 0.749 0.43 0.446 0.46 0.454 0.44 0.45 0.459 0.461"\n2013-10-12T17:55:51Z	6001	0.823972222222222	true	0.612	1.036	ms	"1.098 1.086 1.094 1.123 0.651 0.646 0.647 0.686 0.667 0.674 1.144 0.841 0.969 1.0 0.648 0.669 1.061 1.103 0.784 0.706 0.659 0.647 0.642 0.663 1.085 1.112 0.674 0.97 0.661 0.644 0.665 0.656 0.667 0.759 1.095 0.767"\n2013-10-12T17:55:51Z	8001	1.6816111111111114	true	1.319	2.044	ms	"2.045 1.997 1.976 1.829 1.331 1.25 1.283 1.175 1.321 1.36 1.364 1.213 2.03 2.028 2.032 1.808 1.315 1.387 1.39 1.799 2.07 2.009 2.028 1.52 2.006 2.016 2.005 1.759 2.021 2.054 1.978 1.779 1.583 1.326 1.305 1.146"\n2013-10-12T17:55:51Z	10001	2.112888888888889	true	1.679	2.547	ms	"2.284 1.663 1.618 1.693 2.449 2.481 2.396 2.676 2.412 2.62 2.51 2.618 2.458 2.2 2.288 2.476 1.604 1.69 1.713 1.659 2.531 2.197 1.596 2.312 1.581 1.623 1.559 1.652 2.49 2.448 2.468 2.595 2.165 1.933 1.634 1.772"\n2013-10-12T17:55:51Z	12001	1.9617222222222221	true	1.610	2.314	ms	"2.112 1.348 1.307 2.048 1.576 2.132 2.117 2.011 2.172 2.143 2.156 1.955 2.11 2.17 2.127 2.263 2.122 2.101 2.066 2.219 2.12 2.121 2.161 2.163 2.156 1.292 1.293 1.529 1.279 1.635 2.123 2.244 2.2 1.584 2.222 2.245"\n2013-10-12T17:55:51Z	14001	2.213527777777778	true	1.835	2.592	ms	"2.02 2.258 2.443 1.753 2.436 2.206 2.444 2.458 1.466 2.257 2.412 2.155 2.457 2.448 2.497 2.097 2.473 2.542 2.462 2.187 2.503 1.941 1.651 1.508 2.476 2.547 2.137 1.621 1.477 1.631 2.38 2.553 2.475 2.513 2.54 2.263"\n2013-10-12T17:55:51Z	16001	3.234055555555556	true	2.585	3.883	ms	"3.791 3.885 3.159 2.454 2.466 2.602 3.374 3.855 2.452 2.825 3.903 2.497 2.583 2.487 2.702 2.667 3.862 3.926 3.961 3.926 3.804 3.277 2.396 2.628 3.768 3.318 3.332 3.938 2.544 2.452 3.793 3.369 3.881 4.038 3.4 3.111"\n2013-10-12T17:55:51Z	18001	3.850805555555557	true	3.197	4.504	ms	"2.895 4.336 4.282 4.027 3.066 4.281 4.202 4.67 2.763 3.035 2.765 2.751 4.279 4.51 4.267 4.381 3.366 2.828 3.462 4.363 3.578 4.266 4.259 3.789 4.333 4.334 4.388 4.306 4.007 3.798 3.625 4.369 4.308 4.044 2.884 3.812"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2013-10-12T17:55:51Z	1	0.14652777777777778	true	0.103	0.190	ms	"0.13 0.119 0.167 0.187 0.111 0.123 0.162 0.2 0.138 0.126 0.187 0.215 0.089 0.092 0.127 0.144 0.119 0.144 0.171 0.186 0.113 0.12 0.178 0.193 0.083 0.086 0.123 0.174 0.108 0.117 0.154 0.189 0.105 0.229 0.218 0.148"\n2013-10-12T17:55:51Z	2001	0.1584444444444445	true	0.122	0.195	ms	"0.216 0.15 0.199 0.187 0.112 0.104 0.144 0.142 0.167 0.131 0.235 0.182 0.137 0.172 0.167 0.187 0.143 0.123 0.178 0.159 0.14 0.136 0.18 0.212 0.164 0.144 0.211 0.187 0.1 0.094 0.16 0.121 0.152 0.128 0.175 0.165"\n2013-10-12T17:55:51Z	4001	0.13877777777777772	true	0.104	0.173	ms	"0.185 0.109 0.136 0.152 0.101 0.101 0.131 0.184 0.132 0.094 0.141 0.129 0.089 0.093 0.117 0.128 0.141 0.137 0.18 0.207 0.126 0.138 0.166 0.191 0.131 0.135 0.155 0.183 0.144 0.135 0.169 0.193 0.09 0.105 0.11 0.138"\n2013-10-12T17:55:51Z	6001	0.1331388888888889	true	0.099	0.167	ms	"0.134 0.146 0.131 0.173 0.107 0.113 0.131 0.149 0.091 0.114 0.094 0.142 0.153 0.147 0.128 0.183 0.091 0.112 0.093 0.138 0.091 0.109 0.092 0.141 0.126 0.148 0.126 0.222 0.094 0.104 0.149 0.191 0.151 0.154 0.151 0.174"\n2013-10-12T17:55:51Z	8001	0.136	true	0.110	0.162	ms	"0.131 0.138 0.13 0.156 0.141 0.131 0.143 0.157 0.112 0.106 0.106 0.127 0.153 0.165 0.137 0.174 0.144 0.197 0.125 0.158 0.11 0.108 0.099 0.133 0.142 0.107 0.093 0.168 0.161 0.148 0.146 0.169 0.134 0.109 0.108 0.13"\n2013-10-12T17:55:51Z	10001	0.18424999999999997	true	0.121	0.247	ms	"0.104 0.165 0.102 0.166 0.199 0.308 0.146 0.234 0.163 0.239 0.123 0.251 0.108 0.163 0.098 0.163 0.135 0.234 0.121 0.215 0.145 0.243 0.147 0.224 0.139 0.234 0.123 0.228 0.159 0.298 0.164 0.267 0.17 0.27 0.149 0.236"\n2013-10-12T17:55:51Z	12001	0.18613888888888885	true	0.133	0.240	ms	"0.118 0.125 0.191 0.191 0.187 0.191 0.203 0.322 0.161 0.17 0.242 0.267 0.191 0.207 0.231 0.259 0.118 0.151 0.131 0.185 0.12 0.161 0.152 0.222 0.127 0.129 0.162 0.196 0.154 0.162 0.176 0.222 0.182 0.194 0.199 0.302"\n2013-10-12T17:55:51Z	14001	0.20477777777777773	true	0.158	0.252	ms	"0.247 0.235 0.276 0.242 0.255 0.148 0.139 0.16 0.216 0.159 0.145 0.169 0.222 0.286 0.255 0.247 0.2 0.171 0.128 0.212 0.209 0.244 0.201 0.23 0.182 0.22 0.219 0.236 0.222 0.241 0.22 0.241 0.144 0.151 0.14 0.16"\n2013-10-12T17:55:51Z	16001	0.1880277777777778	true	0.140	0.236	ms	"0.207 0.212 0.197 0.235 0.161 0.14 0.137 0.173 0.233 0.2 0.326 0.239 0.132 0.14 0.136 0.192 0.137 0.16 0.247 0.221 0.187 0.198 0.213 0.275 0.129 0.164 0.139 0.159 0.173 0.193 0.202 0.244 0.17 0.164 0.15 0.184"\n2013-10-12T17:55:51Z	18001	0.21597222222222226	true	0.176	0.256	ms	"0.177 0.151 0.159 0.213 0.165 0.15 0.165 0.169 0.212 0.198 0.224 0.239 0.245 0.217 0.249 0.235 0.243 0.226 0.239 0.261 0.262 0.214 0.214 0.254 0.252 0.23 0.261 0.28 0.243 0.233 0.226 0.258 0.198 0.166 0.166 0.181"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2013-10-12T17:55:51Z	1	0.17666666666666664	true	0.049	0.304	ms	"0.14 0.168 0.114 0.48 0.081 0.135 0.078 0.293 0.084 0.099 0.077 0.305 0.105 0.146 0.113 0.373 0.105 0.149 0.115 0.373 0.132 0.153 0.128 0.387 0.074 0.099 0.076 0.308 0.13 0.155 0.121 0.424 0.088 0.101 0.077 0.374"\n2013-10-12T17:55:51Z	2001	0.44400000000000006	true	0.341	0.547	ms	"0.454 0.518 0.475 0.508 0.348 0.314 0.297 0.315 0.292 0.328 0.304 0.365 0.483 0.523 0.533 0.493 0.49 0.526 0.491 0.495 0.496 0.547 0.491 0.506 0.458 0.525 0.479 0.49 0.53 0.588 0.545 0.541 0.288 0.319 0.294 0.335"\n2013-10-12T17:55:51Z	4001	0.6951666666666666	true	0.516	0.875	ms	"0.789 0.748 0.815 0.822 0.836 0.501 0.491 0.502 0.793 0.502 0.5 0.516 0.829 0.804 0.853 0.852 0.82 0.82 0.489 0.679 0.854 0.83 0.838 0.846 0.485 0.483 0.487 0.605 0.891 0.9 0.924 0.865 0.511 0.557 0.488 0.501"\n2013-10-12T17:55:51Z	6001	1.128055555555556	true	0.923	1.333	ms	"1.139 1.246 1.08 1.02 1.145 1.245 1.147 1.183 0.748 1.274 1.163 1.225 0.682 0.761 0.957 1.175 1.121 1.257 1.18 1.223 1.193 1.332 1.223 0.885 1.264 1.313 1.166 1.18 1.305 1.389 1.304 1.307 0.719 0.765 1.039 1.255"\n2013-10-12T17:55:51Z	8001	1.818861111111111	true	1.429	2.209	ms	"2.126 2.098 1.456 1.563 1.733 2.095 2.146 2.416 1.336 1.31 1.436 1.497 2.219 2.157 1.381 1.529 1.389 1.902 2.047 2.258 2.173 1.949 1.488 1.869 1.436 1.313 1.341 1.987 2.067 1.815 2.314 2.449 2.115 1.698 1.387 1.984"\n2013-10-12T17:55:51Z	10001	2.4521944444444443	true	2.020	2.885	ms	"2.677 2.691 2.74 2.523 1.738 2.444 2.02 1.702 2.094 2.606 2.645 2.639 2.635 2.777 2.206 2.611 1.862 2.825 2.508 2.598 1.814 2.001 2.766 1.94 2.63 2.884 2.561 2.189 2.995 3.078 2.919 2.74 1.718 1.977 2.773 2.753"\n2013-10-12T17:55:51Z	12001	2.0293333333333337	true	1.649	2.410	ms	"2.156 2.138 2.255 2.235 2.229 2.318 1.908 1.42 2.246 1.635 2.287 1.654 1.931 2.138 2.23 2.236 2.304 2.282 2.23 1.694 2.198 2.261 2.088 2.317 2.239 2.189 1.962 1.858 1.608 2.391 2.522 2.512 1.331 1.385 1.333 1.336"\n2013-10-12T17:55:51Z	14001	2.176305555555556	true	1.704	2.648	ms	"2.507 2.271 2.532 2.555 2.528 2.237 1.574 1.658 2.541 2.606 2.642 2.576 2.564 2.534 1.551 2.297 1.576 1.614 2.48 2.585 1.966 2.296 2.034 1.567 1.822 2.594 2.573 2.552 1.879 1.819 1.852 3.029 1.504 1.636 1.539 2.257"\n2013-10-12T17:55:51Z	16001	3.7477500000000012	true	3.193	4.302	ms	"3.935 3.478 2.936 3.092 3.8 3.723 4.104 3.675 3.004 2.665 3.481 4.102 4.018 3.898 3.908 3.442 4.073 4.109 4.053 3.622 2.661 3.4 4.11 4.173 3.946 3.909 3.691 4.143 4.211 4.443 4.468 4.63 2.644 3.803 4.227 3.342"\n2013-10-12T17:55:51Z	18001	3.964277777777778	true	3.348	4.581	ms	"3.49 3.58 4.643 4.341 2.941 2.82 4.128 4.171 4.142 2.92 3.531 4.609 4.645 4.207 3.301 4.099 4.622 4.256 4.116 4.219 4.802 3.496 3.054 3.856 4.585 3.615 4.101 4.153 3.455 3.469 4.629 3.136 4.578 4.335 4.305 4.364"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2013-10-12T17:55:51Z	1	0.20461111111111113	true	-0.014	0.424	ms	"0.107 0.151 0.118 0.626 0.073 0.108 0.076 0.302 0.073 0.101 0.113 0.561 0.11 0.147 0.113 0.385 0.111 0.152 0.111 0.366 0.073 0.099 0.077 0.278 0.108 0.143 0.112 1.062 0.108 0.147 0.109 0.418 0.099 0.143 0.104 0.382"\n2013-10-12T17:55:51Z	2001	0.4228888888888888	true	0.316	0.530	ms	"0.481 0.533 0.498 0.513 0.282 0.387 0.293 0.305 0.473 0.53 0.508 0.506 0.465 0.584 0.478 0.502 0.467 0.52 0.527 0.482 0.282 0.309 0.29 0.323 0.287 0.332 0.307 0.499 0.28 0.321 0.34 0.35 0.462 0.523 0.485 0.5"\n2013-10-12T17:55:51Z	4001	0.685611111111111	true	0.519	0.852	ms	"0.495 0.602 0.826 0.852 0.812 0.814 0.828 0.721 0.832 0.854 0.805 0.858 0.706 0.815 0.807 0.824 0.493 0.529 0.5 0.507 0.798 0.815 0.5 0.495 0.491 0.575 0.492 0.501 0.83 0.803 0.839 0.83 0.493 0.487 0.502 0.751"\n2013-10-12T17:55:51Z	6001	0.9822777777777778	true	0.725	1.239	ms	"1.163 1.295 1.159 1.21 0.675 0.761 0.684 0.709 0.674 0.782 1.127 1.211 1.128 1.281 1.163 1.196 1.148 0.974 0.692 0.708 0.674 0.787 0.721 1.162 1.137 1.297 1.214 1.229 1.163 1.248 1.172 0.704 0.691 0.774 0.929 0.72"\n2013-10-12T17:55:51Z	8001	1.8009722222222224	true	1.422	2.180	ms	"2.211 2.188 1.751 1.401 2.096 1.769 2.079 2.093 1.309 1.322 1.286 1.334 1.367 1.348 1.358 1.805 2.053 2.18 2.057 1.794 1.99 1.704 1.314 1.368 2.159 2.157 2.153 2.172 1.588 2.208 2.173 1.513 2.087 2.149 1.877 1.422"\n2013-10-12T17:55:51Z	10001	2.2199166666666668	true	1.747	2.693	ms	"2.77 2.931 2.591 2.632 2.705 2.744 2.269 2.483 2.637 2.746 2.608 2.019 1.728 1.868 2.544 1.702 2.603 2.708 2.508 2.532 1.664 1.708 1.684 2.52 1.889 1.806 1.657 1.827 1.732 1.753 1.674 2.46 1.698 1.864 2.039 2.614"\n2013-10-12T17:55:51Z	12001	1.960888888888889	true	1.588	2.334	ms	"1.887 2.18 2.267 2.215 2.237 2.292 2.236 2.246 2.211 2.18 2.21 2.179 2.172 2.104 2.203 1.605 1.574 2.188 2.162 2.122 2.212 1.508 1.386 1.367 1.375 1.419 2.221 2.219 1.722 1.391 2.295 1.979 2.182 1.471 1.338 2.037"\n2013-10-12T17:55:51Z	14001	2.152527777777778	true	1.692	2.613	ms	"2.685 1.562 1.527 1.574 2.541 2.526 2.351 1.545 1.956 2.405 2.513 2.628 2.5 1.63 1.718 2.593 2.498 2.15 1.523 1.861 2.35 2.547 2.495 1.999 1.525 2.14 2.066 2.565 1.478 1.593 1.931 2.634 2.162 2.541 2.583 2.596"\n2013-10-12T17:55:51Z	16001	3.6469166666666664	true	3.048	4.246	ms	"4.02 3.151 3.922 4.202 3.694 3.722 3.968 4.165 2.782 3.785 3.537 4.129 2.824 4.015 4.045 4.087 4.0 3.109 3.535 2.557 2.496 3.017 3.871 2.487 4.174 4.048 3.388 2.64 3.564 3.839 4.062 4.174 4.003 4.001 4.1 4.176"\n2013-10-12T17:55:51Z	18001	3.8906111111111112	true	3.198	4.583	ms	"4.007 4.447 2.901 3.314 2.693 2.588 3.964 4.101 4.552 4.364 3.909 2.836 4.572 4.52 4.585 4.54 3.567 4.406 4.375 4.407 4.13 4.075 4.167 4.2 3.004 3.09 3.28 2.887 3.625 4.432 4.359 3.568 4.508 3.21 4.499 4.38"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2013-10-12T17:55:51Z	1	0.17883333333333332	true	0.021	0.336	ms	"0.074 0.112 0.076 0.655 0.101 0.144 0.108 0.386 0.107 0.156 0.114 0.508 0.075 0.103 0.085 0.294 0.12 0.169 0.121 0.43 0.104 0.149 0.109 0.346 0.074 0.101 0.079 0.24 0.073 0.111 0.077 0.418 0.079 0.103 0.076 0.361"\n2013-10-12T17:55:51Z	2001	0.40399999999999997	true	0.307	0.501	ms	"0.287 0.384 0.298 0.31 0.462 0.523 0.472 0.491 0.449 0.518 0.505 0.496 0.284 0.317 0.297 0.307 0.456 0.504 0.481 0.49 0.281 0.407 0.288 0.309 0.305 0.321 0.296 0.306 0.459 0.532 0.471 0.394 0.432 0.479 0.43 0.503"\n2013-10-12T17:55:51Z	4001	0.5923055555555555	true	0.438	0.746	ms	"0.495 0.49 0.52 0.551 0.488 0.483 0.68 0.81 0.495 0.489 0.492 0.532 0.487 0.483 0.504 0.494 0.831 0.821 0.818 0.851 0.827 0.579 0.484 0.503 0.492 0.491 0.498 0.543 0.513 0.833 0.813 0.833 0.486 0.485 0.501 0.628"\n2013-10-12T17:55:51Z	6001	0.9725833333333329	true	0.710	1.235	ms	"0.684 0.803 0.694 0.718 1.156 1.292 0.685 0.706 0.739 0.795 0.698 0.719 1.145 1.301 1.158 0.719 1.135 1.33 1.269 1.02 1.125 1.257 1.133 1.171 1.182 1.233 0.709 0.717 0.686 0.77 1.186 1.17 0.717 0.799 1.175 1.217"\n2013-10-12T17:55:51Z	8001	1.8435277777777779	true	1.470	2.217	ms	"1.989 1.319 1.341 1.545 1.288 1.306 1.355 1.348 2.133 2.068 2.119 2.149 1.324 1.3 1.328 1.43 2.082 2.073 2.063 2.121 2.038 2.112 2.092 2.154 2.152 2.201 2.047 2.176 2.075 2.077 1.764 1.766 1.77 2.084 2.098 2.08"\n2013-10-12T17:55:51Z	10001	2.4465555555555554	true	2.032	2.861	ms	"2.679 2.676 1.666 1.776 2.854 2.779 2.454 2.549 2.636 2.598 2.541 2.505 2.606 2.573 1.678 2.74 1.953 2.677 2.534 2.558 2.708 2.699 2.539 2.602 2.796 2.841 2.616 2.656 1.697 1.818 1.907 1.623 2.641 2.762 2.545 2.594"\n2013-10-12T17:55:51Z	12001	1.7475277777777776	true	1.330	2.165	ms	"2.251 2.178 2.189 2.171 1.303 1.315 1.926 2.165 1.416 1.355 2.191 2.087 2.23 2.12 1.297 1.311 2.162 1.732 1.416 2.213 2.079 1.608 1.323 2.111 1.331 1.37 1.365 1.848 1.363 1.334 1.349 1.36 2.187 1.911 1.324 2.02"\n2013-10-12T17:55:51Z	14001	2.0019722222222223	true	1.509	2.495	ms	"1.517 1.534 1.589 1.948 1.538 1.544 1.521 1.57 1.522 1.526 1.679 1.972 2.301 1.59 1.505 1.849 2.506 2.534 2.347 2.465 1.46 1.902 2.495 2.661 2.699 2.635 2.545 2.65 1.623 1.809 1.832 1.558 2.588 2.068 2.331 2.658"\n2013-10-12T17:55:51Z	16001	3.563027777777778	true	2.995	4.131	ms	"3.865 2.783 3.29 4.003 4.2 3.996 4.055 3.395 3.475 4.07 3.807 4.096 2.538 3.19 2.55 3.428 2.648 2.683 2.662 3.657 3.65 3.954 3.93 3.906 3.763 3.275 4.197 3.827 3.372 3.96 4.075 3.591 3.956 3.847 2.668 3.907"\n2013-10-12T17:55:51Z	18001	3.805416666666666	true	3.195	4.416	ms	"4.107 3.684 4.076 4.033 3.859 2.875 3.002 2.778 3.102 2.8 3.356 3.736 4.402 3.493 4.395 3.723 3.441 4.146 4.495 3.901 4.402 4.316 3.079 4.382 3.646 4.348 4.528 4.397 4.062 4.08 4.094 4.183 2.839 2.902 3.906 4.427"\n'];
  parent[my.name] = my;
  return parent;
})(ScalaMeter || {});

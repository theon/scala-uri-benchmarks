var ScalaMeter = (function(parent) {
  var my = { name: "data" };
  my.index = [{"scope" : ["Uri-Parsing", "path-length"], "name" : "Test-0", "file" : "..\/Uri-Parsing.path-length.Test-0.dsv"}, {"scope" : ["Uri-Parsing", "domain-length"], "name" : "Test-1", "file" : "..\/Uri-Parsing.domain-length.Test-1.dsv"}, {"scope" : ["Uri-Parsing", "query-string-key-length"], "name" : "Test-2", "file" : "..\/Uri-Parsing.query-string-key-length.Test-2.dsv"}, {"scope" : ["Uri-Parsing", "query-string-value-length"], "name" : "Test-3", "file" : "..\/Uri-Parsing.query-string-value-length.Test-3.dsv"}, {"scope" : ["Uri-Parsing", "number-of-query-string-pairs"], "name" : "Test-4", "file" : "..\/Uri-Parsing.number-of-query-string-pairs.Test-4.dsv"}];
  my.tsvData = ['date	param-String Length	value	success	cilo	cihi	units	complete\n2013-10-12T17:54:04Z	1	0.3845	true	-0.107	0.876	ms	"0.325 0.413 0.421 0.421 0.425 0.402 0.281 0.384 0.383 0.39"\n2013-10-12T17:54:04Z	201	2.5614999999999997	true	-0.997	6.120	ms	"2.323 2.349 3.174 2.598 2.873 2.415 2.723 1.959 2.453 2.748"\n2013-10-12T17:54:04Z	401	5.0446	true	-2.066	12.155	ms	"4.699 5.917 3.574 5.168 4.697 5.861 5.44 4.861 5.312 4.917"\n2013-10-12T17:54:04Z	601	6.786399999999999	true	-5.550	19.123	ms	"7.729 7.548 7.961 5.768 5.217 5.278 5.754 6.77 8.198 7.641"\n2013-10-12T17:54:04Z	801	9.4633	true	-2.962	21.888	ms	"8.643 11.35 7.939 10.295 9.244 7.758 10.445 8.949 9.47 10.54"\n2013-10-12T17:54:04Z	1001	10.835999999999999	true	-5.218	26.890	ms	"13.153 10.779 10.116 8.427 13.188 10.816 9.184 10.131 11.573 10.993"\n2013-10-12T17:54:04Z	1201	12.946099999999998	true	-5.467	31.359	ms	"11.484 10.785 15.67 13.769 14.135 12.966 13.806 10.37 11.862 14.614"\n2013-10-12T17:54:04Z	1401	15.687499999999996	true	-2.685	34.060	ms	"16.011 14.987 12.973 15.703 14.048 18.999 14.732 17.39 15.045 16.987"\n2013-10-12T17:54:04Z	1601	18.746600000000004	true	-6.634	44.127	ms	"20.85 18.399 21.053 14.962 16.636 20.968 18.991 22.056 17.074 16.477"\n2013-10-12T17:54:04Z	1801	19.616999999999997	true	-1.314	40.548	ms	"18.098 20.391 20.336 19.676 19.757 22.671 15.351 19.093 19.121 21.676"\n2013-10-13T14:40:47Z	1	0.5626	true	-0.648	1.773	ms	"0.342 0.499 0.586 0.595 0.595 0.695 0.417 0.694 0.652 0.551"\n2013-10-13T14:40:47Z	201	2.8409	true	-2.713	8.395	ms	"2.533 3.327 2.884 2.121 2.35 3.291 3.158 2.057 3.34 3.348"\n2013-10-13T14:40:47Z	401	5.300399999999999	true	-3.768	14.369	ms	"5.572 6.247 5.401 6.189 5.741 4.94 3.885 4.958 3.951 6.12"\n2013-10-13T14:40:47Z	601	7.1875	true	-4.727	19.102	ms	"6.106 6.404 8.941 8.202 7.527 6.945 5.756 8.067 5.825 8.102"\n2013-10-13T14:40:47Z	801	9.0288	true	-5.678	23.736	ms	"9.298 6.968 10.785 8.074 10.441 10.626 8.223 7.69 8.012 10.171"\n2013-10-13T14:40:47Z	1001	10.8204	true	-4.683	26.324	ms	"8.635 9.351 12.951 9.526 12.288 11.69 10.938 11.847 9.427 11.551"\n2013-10-13T14:40:47Z	1201	14.663099999999996	true	-3.497	32.823	ms	"15.077 16.923 13.926 12.535 11.708 14.548 15.972 16.324 16.091 13.527"\n2013-10-13T14:40:47Z	1401	15.980000000000004	true	3.024	28.936	ms	"16.835 16.592 16.136 17.025 15.936 17.817 16.247 14.339 14.967 13.906"\n2013-10-13T14:40:47Z	1601	18.277700000000003	true	-2.938	39.493	ms	"18.961 17.247 18.68 20.941 20.157 17.361 16.969 16.554 14.899 21.008"\n2013-10-13T14:40:47Z	1801	20.982499999999998	true	-3.093	45.058	ms	"22.512 19.85 19.383 19.646 19.507 24.545 18.108 19.613 22.051 24.61"\n2013-10-13T14:41:03Z	1	0.0758	true	-0.224	0.375	ms	"0.064 0.059 0.06 0.064 0.096 0.061 0.065 0.071 0.067 0.151"\n2013-10-13T14:41:03Z	201	0.0708	true	-0.151	0.293	ms	"0.088 0.089 0.097 0.054 0.054 0.054 0.054 0.056 0.057 0.105"\n2013-10-13T14:41:03Z	401	0.1065	true	0.081	0.132	ms	"0.104 0.102 0.106 0.106 0.106 0.107 0.107 0.108 0.108 0.111"\n2013-10-13T14:41:03Z	601	0.11320000000000001	true	-0.145	0.372	ms	"0.125 0.127 0.127 0.128 0.131 0.132 0.129 0.076 0.077 0.08"\n2013-10-13T14:41:03Z	801	0.1508	true	0.115	0.186	ms	"0.155 0.151 0.149 0.147 0.151 0.147 0.15 0.15 0.15 0.158"\n2013-10-13T14:41:03Z	1001	0.16650000000000004	true	0.081	0.252	ms	"0.164 0.161 0.164 0.162 0.164 0.164 0.189 0.165 0.163 0.169"\n2013-10-13T14:41:03Z	1201	0.1279	true	-0.200	0.456	ms	"0.106 0.106 0.106 0.118 0.118 0.106 0.106 0.151 0.179 0.183"\n2013-10-13T14:41:03Z	1401	0.11849999999999998	true	0.086	0.151	ms	"0.118 0.127 0.117 0.117 0.117 0.118 0.117 0.117 0.118 0.119"\n2013-10-13T14:41:03Z	1601	0.132	true	0.075	0.189	ms	"0.137 0.128 0.129 0.134 0.128 0.128 0.128 0.128 0.137 0.143"\n2013-10-13T14:41:03Z	1801	0.14470000000000005	true	0.070	0.219	ms	"0.139 0.144 0.141 0.157 0.154 0.139 0.14 0.14 0.153 0.14"\n2013-10-13T14:41:18Z	1	0.04999999999999999	true	-0.153	0.253	ms	"0.045 0.043 0.043 0.043 0.043 0.043 0.044 0.044 0.047 0.105"\n2013-10-13T14:41:18Z	201	0.0623	true	-0.036	0.160	ms	"0.055 0.054 0.056 0.053 0.056 0.066 0.075 0.063 0.065 0.08"\n2013-10-13T14:41:18Z	401	0.06100000000000001	true	0.048	0.074	ms	"0.06 0.064 0.06 0.061 0.061 0.061 0.061 0.06 0.06 0.062"\n2013-10-13T14:41:18Z	601	0.07419999999999999	true	0.028	0.120	ms	"0.071 0.083 0.076 0.081 0.072 0.072 0.071 0.071 0.072 0.073"\n2013-10-13T14:41:18Z	801	0.08389999999999999	true	0.069	0.099	ms	"0.085 0.083 0.085 0.082 0.083 0.083 0.084 0.087 0.083 0.084"\n2013-10-13T14:41:18Z	1001	0.09479999999999998	true	0.084	0.106	ms	"0.094 0.094 0.095 0.097 0.095 0.095 0.094 0.094 0.094 0.096"\n2013-10-13T14:41:18Z	1201	0.1075	true	0.062	0.153	ms	"0.105 0.106 0.106 0.119 0.105 0.105 0.106 0.106 0.11 0.107"\n2013-10-13T14:41:18Z	1401	0.1234	true	0.054	0.193	ms	"0.119 0.136 0.131 0.12 0.119 0.131 0.118 0.122 0.118 0.12"\n2013-10-13T14:41:18Z	1601	0.13230000000000003	true	0.085	0.180	ms	"0.129 0.135 0.13 0.129 0.129 0.13 0.138 0.142 0.13 0.131"\n2013-10-13T14:41:18Z	1801	0.1423	true	0.124	0.161	ms	"0.143 0.142 0.141 0.14 0.142 0.143 0.145 0.14 0.142 0.145"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2013-10-12T17:54:04Z	1	0.40969999999999995	true	-0.449	1.269	ms	"0.282 0.334 0.459 0.537 0.341 0.362 0.376 0.452 0.493 0.461"\n2013-10-12T17:54:04Z	201	2.5391	true	-2.997	8.075	ms	"2.035 2.04 2.878 3.401 2.073 3.136 2.163 2.831 2.024 2.81"\n2013-10-12T17:54:04Z	401	4.5440000000000005	true	-4.463	13.551	ms	"3.701 3.588 4.458 5.613 3.847 3.761 4.325 5.771 4.764 5.612"\n2013-10-12T17:54:04Z	601	7.5429	true	-3.044	18.130	ms	"7.958 7.714 7.325 8.247 8.256 7.702 7.282 7.01 8.818 5.117"\n2013-10-12T17:54:04Z	801	8.9305	true	-9.153	27.014	ms	"6.745 9.752 10.688 8.743 10.52 10.865 6.959 10.465 6.999 7.569"\n2013-10-12T17:54:04Z	1001	11.3169	true	-0.985	23.619	ms	"10.874 11.572 9.648 12.435 13.273 9.822 11.217 11.095 10.682 12.551"\n2013-10-12T17:54:04Z	1201	13.378899999999998	true	-0.289	27.046	ms	"14.516 13.482 12.543 14.626 10.602 14.894 13.398 12.222 13.591 13.915"\n2013-10-12T17:54:04Z	1401	15.475	true	0.337	30.613	ms	"16.885 15.239 17.112 16.495 14.973 12.921 13.774 16.331 16.633 14.387"\n2013-10-12T17:54:04Z	1601	18.587	true	-7.389	44.563	ms	"16.83 14.526 18.642 21.454 20.394 21.0 18.322 19.823 20.077 14.802"\n2013-10-12T17:54:04Z	1801	20.4491	true	-7.054	47.952	ms	"20.632 24.21 22.114 16.065 24.109 20.251 20.116 19.761 20.164 17.069"\n2013-10-13T14:40:47Z	1	0.8113999999999999	true	-0.236	1.859	ms	"0.737 0.848 0.823 0.594 0.987 0.842 0.819 0.842 0.846 0.776"\n2013-10-13T14:40:47Z	201	5.7222	true	-0.538	11.983	ms	"6.601 6.285 5.867 4.535 5.461 5.627 5.145 6.131 5.999 5.571"\n2013-10-13T14:40:47Z	401	10.5459	true	-4.970	26.061	ms	"9.825 10.306 13.607 8.669 10.506 11.645 11.812 9.802 8.879 10.408"\n2013-10-13T14:40:47Z	601	14.1798	true	-6.422	34.782	ms	"12.916 15.066 11.282 12.854 16.21 15.499 16.402 12.222 12.808 16.539"\n2013-10-13T14:40:47Z	801	18.0086	true	-6.293	42.310	ms	"16.098 16.291 16.892 21.417 18.052 14.173 20.437 19.617 16.988 20.121"\n2013-10-13T14:40:47Z	1001	21.9578	true	-8.337	52.252	ms	"23.296 17.997 22.051 26.679 24.899 20.57 21.037 22.94 17.276 22.833"\n2013-10-13T14:40:47Z	1201	26.9714	true	-8.033	61.975	ms	"28.35 28.809 31.042 27.376 22.604 21.073 27.345 25.856 25.699 31.56"\n2013-10-13T14:40:47Z	1401	30.162000000000006	true	3.376	56.948	ms	"31.903 31.672 25.619 28.241 32.41 32.776 31.686 26.358 30.468 30.487"\n2013-10-13T14:40:47Z	1601	34.6464	true	13.303	55.990	ms	"35.088 36.757 35.612 31.383 36.926 36.89 34.95 33.657 31.81 33.391"\n2013-10-13T14:40:47Z	1801	40.742900000000006	true	-15.295	96.781	ms	"37.026 34.216 41.952 41.76 36.264 41.72 41.565 53.75 38.234 40.942"\n2013-10-13T14:41:03Z	1	0.05789999999999999	true	-0.142	0.258	ms	"0.051 0.051 0.051 0.051 0.051 0.051 0.052 0.053 0.056 0.112"\n2013-10-13T14:41:03Z	201	0.08519999999999998	true	0.030	0.141	ms	"0.082 0.082 0.083 0.082 0.093 0.097 0.083 0.083 0.083 0.084"\n2013-10-13T14:41:03Z	401	0.11770000000000003	true	0.062	0.174	ms	"0.115 0.115 0.115 0.116 0.115 0.115 0.13 0.125 0.115 0.116"\n2013-10-13T14:41:03Z	601	0.1478	true	0.134	0.162	ms	"0.147 0.148 0.147 0.151 0.147 0.147 0.149 0.147 0.147 0.148"\n2013-10-13T14:41:03Z	801	0.1832	true	0.097	0.269	ms	"0.18 0.18 0.181 0.179 0.179 0.206 0.184 0.181 0.179 0.183"\n2013-10-13T14:41:03Z	1001	0.2222	true	-0.017	0.461	ms	"0.213 0.211 0.283 0.212 0.215 0.211 0.212 0.217 0.211 0.237"\n2013-10-13T14:41:03Z	1201	0.2472	true	0.200	0.294	ms	"0.248 0.245 0.245 0.245 0.256 0.254 0.243 0.248 0.243 0.245"\n2013-10-13T14:41:03Z	1401	0.2794	true	0.190	0.369	ms	"0.277 0.273 0.275 0.303 0.279 0.276 0.277 0.279 0.279 0.276"\n2013-10-13T14:41:03Z	1601	0.3135	true	0.207	0.420	ms	"0.309 0.308 0.309 0.31 0.326 0.309 0.308 0.308 0.338 0.31"\n2013-10-13T14:41:03Z	1801	0.3451	true	0.257	0.433	ms	"0.342 0.368 0.343 0.339 0.34 0.346 0.343 0.342 0.342 0.346"\n2013-10-13T14:41:18Z	1	0.061399999999999996	true	-0.155	0.278	ms	"0.05 0.049 0.056 0.053 0.053 0.053 0.053 0.055 0.076 0.116"\n2013-10-13T14:41:18Z	201	0.07149999999999998	true	0.064	0.079	ms	"0.072 0.071 0.071 0.071 0.071 0.072 0.071 0.071 0.072 0.073"\n2013-10-13T14:41:18Z	401	0.09169999999999998	true	0.087	0.097	ms	"0.092 0.092 0.092 0.092 0.092 0.091 0.092 0.091 0.091 0.092"\n2013-10-13T14:41:18Z	601	0.12500000000000003	true	-0.056	0.306	ms	"0.114 0.127 0.119 0.119 0.142 0.167 0.122 0.113 0.113 0.114"\n2013-10-13T14:41:18Z	801	0.1384	true	0.035	0.242	ms	"0.134 0.134 0.134 0.134 0.134 0.134 0.134 0.135 0.147 0.164"\n2013-10-13T14:41:18Z	1001	0.1617	true	-0.010	0.333	ms	"0.156 0.155 0.154 0.155 0.207 0.167 0.155 0.156 0.155 0.157"\n2013-10-13T14:41:18Z	1201	0.18479999999999996	true	0.089	0.281	ms	"0.191 0.188 0.196 0.176 0.182 0.177 0.176 0.178 0.202 0.182"\n2013-10-13T14:41:18Z	1401	0.20420000000000002	true	0.076	0.332	ms	"0.197 0.201 0.198 0.197 0.203 0.198 0.226 0.197 0.197 0.228"\n2013-10-13T14:41:18Z	1601	0.22280000000000003	true	0.140	0.305	ms	"0.218 0.218 0.219 0.222 0.221 0.218 0.226 0.244 0.22 0.222"\n2013-10-13T14:41:18Z	1801	0.24930000000000002	true	0.148	0.351	ms	"0.251 0.253 0.245 0.24 0.252 0.254 0.242 0.239 0.245 0.272"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2013-10-12T17:54:04Z	1	0.6157999999999999	true	-0.488	1.720	ms	"0.626 0.669 0.527 0.694 0.472 0.723 0.74 0.479 0.704 0.524"\n2013-10-12T17:54:04Z	201	2.7525	true	-3.927	9.432	ms	"2.237 2.18 3.61 2.774 3.103 2.565 2.618 2.169 2.268 4.001"\n2013-10-12T17:54:04Z	401	5.2265	true	-0.911	11.364	ms	"5.667 5.303 4.585 5.517 5.358 5.337 5.87 5.143 3.889 5.596"\n2013-10-12T17:54:04Z	601	7.0847999999999995	true	-11.033	25.203	ms	"5.537 6.768 6.768 6.112 7.339 8.681 6.935 5.38 6.144 11.184"\n2013-10-12T17:54:04Z	801	8.931799999999999	true	-8.420	26.284	ms	"7.498 7.689 7.685 10.555 8.121 10.13 7.279 10.08 8.178 12.103"\n2013-10-12T17:54:04Z	1001	11.7803	true	-5.316	28.877	ms	"9.122 12.63 12.627 12.279 11.425 9.886 9.932 12.867 14.125 12.91"\n2013-10-12T17:54:04Z	1201	14.073600000000003	true	-5.799	33.946	ms	"11.835 14.651 15.66 14.625 11.485 12.079 13.449 13.735 16.545 16.672"\n2013-10-12T17:54:04Z	1401	16.956999999999997	true	-2.905	36.819	ms	"13.847 16.328 16.694 17.647 15.827 15.583 15.886 19.278 20.088 18.392"\n2013-10-12T17:54:04Z	1601	18.5385	true	-4.428	41.505	ms	"16.572 17.454 17.709 15.483 18.673 20.725 16.614 22.205 19.006 20.944"\n2013-10-12T17:54:04Z	1801	21.2523	true	4.313	38.192	ms	"19.894 22.969 19.56 22.386 18.911 20.922 20.52 22.758 23.692 20.911"\n2013-10-13T14:40:47Z	1	1.475	true	-2.216	5.166	ms	"1.668 1.777 1.343 1.488 1.176 1.838 1.504 1.879 0.723 1.354"\n2013-10-13T14:40:47Z	201	5.7249	true	-13.851	25.301	ms	"6.836 6.639 5.785 4.987 6.944 6.67 7.287 5.93 0.867 5.304"\n2013-10-13T14:40:47Z	401	9.2075	true	-26.241	44.656	ms	"10.481 9.315 8.397 11.841 7.785 11.41 8.083 11.585 0.855 12.323"\n2013-10-13T14:40:47Z	601	13.3393	true	-34.853	61.531	ms	"15.086 13.827 15.239 15.04 12.056 13.401 16.466 14.922 0.86 16.496"\n2013-10-13T14:40:47Z	801	17.0276	true	-44.042	78.098	ms	"19.011 21.502 20.265 17.603 18.146 16.591 19.856 17.067 1.049 19.186"\n2013-10-13T14:40:47Z	1001	21.850299999999997	true	-57.803	101.504	ms	"25.07 22.122 24.215 24.992 26.305 21.243 27.35 23.156 0.927 23.123"\n2013-10-13T14:40:47Z	1201	25.3444	true	-65.059	115.748	ms	"27.488 24.772 28.667 28.993 27.316 26.262 30.048 30.203 1.311 28.384"\n2013-10-13T14:40:47Z	1401	29.5353	true	-78.053	137.123	ms	"34.171 29.198 37.9 32.616 29.53 32.851 30.142 33.177 1.348 34.42"\n2013-10-13T14:40:47Z	1601	31.577800000000003	true	-84.192	147.347	ms	"40.273 33.635 37.635 35.036 30.925 32.717 37.868 34.909 1.375 31.405"\n2013-10-13T14:40:47Z	1801	34.917500000000004	true	-130.638	200.473	ms	"10.17 47.664 41.852 38.479 46.139 41.607 43.265 39.379 1.432 39.188"\n2013-10-13T14:41:03Z	1	0.07070000000000001	true	-0.151	0.292	ms	"0.059 0.058 0.07 0.062 0.069 0.058 0.071 0.065 0.066 0.129"\n2013-10-13T14:41:03Z	201	0.08909999999999998	true	0.030	0.148	ms	"0.09 0.091 0.102 0.095 0.085 0.086 0.085 0.085 0.086 0.086"\n2013-10-13T14:41:03Z	401	0.1196	true	0.105	0.135	ms	"0.119 0.121 0.118 0.119 0.119 0.119 0.119 0.119 0.12 0.123"\n2013-10-13T14:41:03Z	601	0.2043	true	-0.068	0.477	ms	"0.209 0.208 0.209 0.21 0.22 0.222 0.221 0.229 0.166 0.149"\n2013-10-13T14:41:03Z	801	0.26189999999999997	true	0.165	0.358	ms	"0.278 0.276 0.269 0.257 0.26 0.258 0.253 0.253 0.255 0.26"\n2013-10-13T14:41:03Z	1001	0.22800000000000004	true	-0.345	0.801	ms	"0.198 0.194 0.193 0.195 0.194 0.194 0.195 0.294 0.33 0.293"\n2013-10-13T14:41:03Z	1201	0.22560000000000002	true	0.177	0.274	ms	"0.232 0.235 0.222 0.226 0.222 0.221 0.223 0.225 0.223 0.227"\n2013-10-13T14:41:03Z	1401	0.251	true	0.200	0.302	ms	"0.251 0.26 0.247 0.248 0.248 0.251 0.247 0.247 0.259 0.252"\n2013-10-13T14:41:03Z	1601	0.28500000000000003	true	0.122	0.448	ms	"0.276 0.32 0.276 0.282 0.276 0.307 0.277 0.276 0.281 0.279"\n2013-10-13T14:41:03Z	1801	0.3187	true	0.060	0.578	ms	"0.306 0.304 0.303 0.305 0.319 0.325 0.381 0.303 0.305 0.336"\n2013-10-13T14:41:18Z	1	0.0637	true	-0.156	0.283	ms	"0.056 0.056 0.056 0.056 0.057 0.057 0.058 0.058 0.06 0.123"\n2013-10-13T14:41:18Z	201	0.0783	true	0.073	0.083	ms	"0.078 0.078 0.078 0.079 0.078 0.078 0.078 0.078 0.079 0.079"\n2013-10-13T14:41:18Z	401	0.1031	true	0.024	0.182	ms	"0.1 0.1 0.099 0.099 0.101 0.1 0.099 0.1 0.111 0.122"\n2013-10-13T14:41:18Z	601	0.1251	true	0.060	0.191	ms	"0.121 0.126 0.139 0.133 0.121 0.122 0.121 0.121 0.121 0.126"\n2013-10-13T14:41:18Z	801	0.14739999999999998	true	0.062	0.233	ms	"0.149 0.145 0.145 0.143 0.144 0.17 0.145 0.143 0.144 0.146"\n2013-10-13T14:41:18Z	1001	0.1651	true	0.155	0.176	ms	"0.164 0.165 0.165 0.166 0.164 0.165 0.166 0.165 0.164 0.167"\n2013-10-13T14:41:18Z	1201	0.188	true	0.168	0.208	ms	"0.186 0.188 0.192 0.187 0.188 0.19 0.188 0.186 0.186 0.189"\n2013-10-13T14:41:18Z	1401	0.2169	true	0.100	0.334	ms	"0.245 0.21 0.219 0.223 0.21 0.211 0.22 0.209 0.213 0.209"\n2013-10-13T14:41:18Z	1601	0.24359999999999998	true	0.119	0.368	ms	"0.243 0.246 0.267 0.23 0.238 0.23 0.249 0.253 0.231 0.249"\n2013-10-13T14:41:18Z	1801	0.2625	true	0.160	0.365	ms	"0.253 0.278 0.252 0.25 0.253 0.272 0.265 0.269 0.266 0.267"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2013-10-12T17:54:04Z	1	0.6514	true	-0.515	1.818	ms	"0.664 0.688 0.665 0.629 0.631 0.714 0.893 0.496 0.629 0.505"\n2013-10-12T17:54:04Z	201	2.9464999999999995	true	-2.769	8.662	ms	"3.524 3.456 2.417 3.174 3.309 3.349 2.087 2.743 3.226 2.18"\n2013-10-12T17:54:04Z	401	5.1622	true	-9.048	19.373	ms	"3.92 4.105 8.454 4.904 5.452 4.918 5.673 5.746 3.775 4.675"\n2013-10-12T17:54:04Z	601	7.938300000000001	true	-0.352	16.229	ms	"8.438 9.196 9.178 7.397 7.221 7.455 7.99 6.881 7.963 7.664"\n2013-10-12T17:54:04Z	801	10.5368	true	-14.462	35.536	ms	"10.127 11.294 16.814 7.986 10.371 8.965 9.833 10.311 9.455 10.212"\n2013-10-12T17:54:04Z	1001	12.067899999999998	true	-7.052	31.188	ms	"13.253 12.156 15.815 10.628 10.756 12.042 9.594 11.928 10.777 13.73"\n2013-10-12T17:54:04Z	1201	14.3596	true	-2.983	31.702	ms	"14.122 13.379 15.337 16.778 14.469 11.866 14.142 14.483 12.233 16.787"\n2013-10-12T17:54:04Z	1401	15.2925	true	-5.487	36.072	ms	"12.962 14.453 19.343 16.179 17.706 14.672 13.858 15.003 15.337 13.412"\n2013-10-12T17:54:04Z	1601	18.287400000000005	true	-1.730	38.305	ms	"21.993 18.356 21.205 17.28 18.597 16.007 16.799 17.55 17.186 17.901"\n2013-10-12T17:54:04Z	1801	20.1017	true	-9.749	49.952	ms	"20.316 18.552 23.148 16.539 20.302 23.596 24.205 20.108 16.274 17.977"\n2013-10-13T14:40:47Z	1	1.4154000000000002	true	-2.163	4.994	ms	"1.618 1.843 1.137 1.25 0.739 1.612 1.565 1.811 1.223 1.356"\n2013-10-13T14:40:47Z	201	6.2346	true	-21.781	34.250	ms	"6.823 5.412 7.717 7.172 0.784 6.264 11.287 4.895 4.819 7.173"\n2013-10-13T14:40:47Z	401	9.801	true	-27.332	46.934	ms	"11.826 12.377 10.947 8.61 0.662 12.128 10.815 12.5 8.49 9.655"\n2013-10-13T14:40:47Z	601	14.3231	true	-39.380	68.026	ms	"15.215 17.159 15.688 14.784 0.516 15.255 17.054 12.445 16.888 18.227"\n2013-10-13T14:40:47Z	801	17.587600000000002	true	-49.046	84.221	ms	"22.588 16.634 22.11 18.162 0.608 22.303 17.757 19.71 17.911 18.093"\n2013-10-13T14:40:47Z	1001	21.6969	true	-61.744	105.138	ms	"19.212 23.873 22.461 28.324 0.878 25.706 24.261 28.84 23.342 20.072"\n2013-10-13T14:40:47Z	1201	27.965899999999998	true	-81.562	137.493	ms	"40.556 28.049 29.351 28.798 1.223 30.21 36.015 30.154 23.957 31.346"\n2013-10-13T14:40:47Z	1401	30.4797	true	-87.798	148.757	ms	"40.126 31.753 25.608 32.708 1.216 31.142 42.08 33.461 34.012 32.691"\n2013-10-13T14:40:47Z	1601	30.0242	true	-128.516	188.564	ms	"24.849 39.285 35.384 34.17 1.317 37.098 5.084 44.42 42.095 36.54"\n2013-10-13T14:40:47Z	1801	26.6733	true	-187.108	240.454	ms	"1.597 5.403 41.884 42.709 1.292 43.285 3.986 42.423 42.443 41.711"\n2013-10-13T14:41:03Z	1	0.0716	true	-0.156	0.299	ms	"0.061 0.062 0.061 0.062 0.063 0.084 0.059 0.061 0.074 0.129"\n2013-10-13T14:41:03Z	201	0.10189999999999999	true	-0.062	0.266	ms	"0.12 0.119 0.131 0.098 0.089 0.089 0.09 0.101 0.09 0.092"\n2013-10-13T14:41:03Z	401	0.15460000000000002	true	-0.084	0.394	ms	"0.111 0.112 0.165 0.166 0.164 0.166 0.163 0.165 0.167 0.167"\n2013-10-13T14:41:03Z	601	0.14400000000000002	true	0.017	0.271	ms	"0.145 0.148 0.177 0.139 0.138 0.139 0.138 0.137 0.14 0.139"\n2013-10-13T14:41:03Z	801	0.17579999999999998	true	0.151	0.201	ms	"0.177 0.175 0.174 0.181 0.178 0.174 0.174 0.174 0.174 0.177"\n2013-10-13T14:41:03Z	1001	0.22640000000000002	true	-0.940	1.392	ms	"0.188 0.188 0.188 0.188 0.189 0.19 0.2 0.201 0.19 0.542"\n2013-10-13T14:41:03Z	1201	0.22079999999999997	true	0.123	0.318	ms	"0.215 0.216 0.219 0.216 0.215 0.244 0.23 0.216 0.22 0.217"\n2013-10-13T14:41:03Z	1401	0.24769999999999995	true	0.175	0.321	ms	"0.259 0.257 0.247 0.244 0.24 0.245 0.244 0.241 0.256 0.244"\n2013-10-13T14:41:03Z	1601	0.2771	true	0.163	0.391	ms	"0.284 0.267 0.295 0.269 0.268 0.272 0.269 0.282 0.294 0.271"\n2013-10-13T14:41:03Z	1801	0.3318	true	-0.281	0.945	ms	"0.304 0.297 0.316 0.332 0.335 0.493 0.319 0.299 0.325 0.298"\n2013-10-13T14:41:18Z	1	0.0616	true	-0.151	0.274	ms	"0.055 0.055 0.054 0.054 0.054 0.055 0.056 0.056 0.058 0.119"\n2013-10-13T14:41:18Z	201	0.0842	true	-0.056	0.225	ms	"0.081 0.081 0.081 0.08 0.082 0.081 0.122 0.077 0.077 0.08"\n2013-10-13T14:41:18Z	401	0.10869999999999999	true	0.044	0.174	ms	"0.108 0.108 0.104 0.104 0.108 0.106 0.105 0.104 0.121 0.119"\n2013-10-13T14:41:18Z	601	0.1373	true	-0.194	0.468	ms	"0.117 0.116 0.116 0.126 0.126 0.123 0.123 0.205 0.186 0.135"\n2013-10-13T14:41:18Z	801	0.1432	true	-0.034	0.320	ms	"0.137 0.137 0.137 0.141 0.137 0.138 0.191 0.139 0.137 0.138"\n2013-10-13T14:41:18Z	1001	0.1637	true	0.070	0.257	ms	"0.181 0.18 0.159 0.16 0.159 0.159 0.159 0.161 0.159 0.16"\n2013-10-13T14:41:18Z	1201	0.25839999999999996	true	-0.440	0.957	ms	"0.186 0.31 0.315 0.329 0.325 0.326 0.21 0.191 0.194 0.198"\n2013-10-13T14:41:18Z	1401	0.21980000000000005	true	-0.059	0.499	ms	"0.202 0.202 0.267 0.202 0.202 0.267 0.207 0.202 0.231 0.216"\n2013-10-13T14:41:18Z	1601	0.23369999999999996	true	0.168	0.299	ms	"0.238 0.236 0.234 0.223 0.235 0.236 0.223 0.236 0.233 0.243"\n2013-10-13T14:41:18Z	1801	0.2502000000000001	true	0.170	0.331	ms	"0.244 0.245 0.246 0.244 0.251 0.245 0.245 0.257 0.261 0.264"\n', 'date	param-Num of Query String Pairs	value	success	cilo	cihi	units	complete\n2013-10-12T17:54:04Z	1	0.202	true	-0.550	0.954	ms	"0.159 0.259 0.248 0.155 0.154 0.153 0.146 0.2 0.37 0.176"\n2013-10-12T17:54:04Z	201	0.40359999999999996	true	-0.843	1.650	ms	"0.57 0.612 0.329 0.381 0.403 0.243 0.409 0.374 0.454 0.261"\n2013-10-12T17:54:04Z	401	0.6242	true	-1.640	2.888	ms	"0.95 0.919 0.566 0.577 0.368 0.363 0.706 0.67 0.747 0.376"\n2013-10-12T17:54:04Z	601	0.8029999999999999	true	-1.768	3.374	ms	"0.797 1.086 0.967 0.562 0.525 0.521 1.002 0.991 1.056 0.523"\n2013-10-12T17:54:04Z	801	1.0206	true	-2.233	4.274	ms	"1.069 1.256 1.597 0.682 0.68 0.683 1.161 1.256 1.033 0.789"\n2013-10-12T17:54:04Z	1001	1.3500999999999999	true	-2.301	5.001	ms	"0.865 0.975 1.866 1.549 1.353 0.848 1.56 1.564 1.321 1.6"\n2013-10-12T17:54:04Z	1201	1.6201999999999999	true	-3.113	6.353	ms	"1.041 1.346 2.411 1.856 1.731 1.035 1.236 1.96 1.623 1.963"\n2013-10-12T17:54:04Z	1401	1.8434000000000001	true	-4.387	8.074	ms	"1.267 1.363 2.752 2.283 2.283 1.321 1.292 2.307 2.327 1.239"\n2013-10-12T17:54:04Z	1601	2.0706	true	-4.714	8.855	ms	"1.495 1.496 3.019 2.601 2.373 2.607 1.484 1.444 2.724 1.463"\n2013-10-12T17:54:04Z	1801	2.5284	true	-4.814	9.871	ms	"2.886 2.949 3.647 2.983 2.952 2.733 1.67 2.156 1.59 1.718"\n2013-10-13T14:40:47Z	1	0.1954	true	-0.369	0.759	ms	"0.114 0.272 0.155 0.248 0.158 0.19 0.271 0.153 0.204 0.189"\n2013-10-13T14:40:47Z	201	1.5482	true	-2.684	5.781	ms	"1.936 2.043 1.669 1.698 0.95 1.128 1.981 1.092 1.277 1.708"\n2013-10-13T14:40:47Z	401	4.0308	true	-1.105	9.166	ms	"4.41 4.382 3.641 4.136 3.848 2.847 4.278 4.372 4.034 4.36"\n2013-10-13T14:40:47Z	601	6.309500000000001	true	-26.676	39.295	ms	"7.831 14.414 3.514 4.184 6.001 5.486 4.123 6.581 6.319 4.642"\n2013-10-13T14:40:47Z	801	6.6331999999999995	true	-7.416	20.682	ms	"8.701 7.411 4.717 6.581 6.199 8.886 5.943 6.504 5.808 5.582"\n2013-10-13T14:40:47Z	1001	9.0056	true	-13.572	31.583	ms	"10.984 12.278 6.482 10.494 5.786 9.372 7.411 8.991 10.756 7.502"\n2013-10-13T14:40:47Z	1201	9.8469	true	-7.545	27.239	ms	"8.058 10.595 7.894 11.417 11.767 12.675 9.149 9.103 8.646 9.165"\n2013-10-13T14:40:47Z	1401	13.6296	true	-7.900	35.159	ms	"9.948 11.252 14.666 14.437 14.276 14.068 14.781 15.804 11.275 15.789"\n2013-10-13T14:40:47Z	1601	12.1619	true	-16.165	40.489	ms	"7.709 8.14 14.655 10.465 12.091 12.614 13.886 13.086 16.145 12.828"\n2013-10-13T14:40:47Z	1801	12.8954	true	-8.544	34.334	ms	"9.547 9.721 15.474 14.067 11.539 13.294 14.387 12.492 13.829 14.604"\n2013-10-13T14:41:03Z	1	0.07540000000000001	true	-0.169	0.320	ms	"0.05 0.055 0.072 0.072 0.075 0.076 0.067 0.081 0.07 0.136"\n2013-10-13T14:41:03Z	201	0.9255000000000001	true	0.526	1.325	ms	"0.902 0.929 0.926 0.895 0.904 0.926 0.898 0.9 0.956 1.019"\n2013-10-13T14:41:03Z	401	2.0039999999999996	true	-3.392	7.400	ms	"1.765 1.785 1.793 1.809 1.761 1.79 1.805 1.812 2.34 3.38"\n2013-10-13T14:41:03Z	601	2.6832	true	2.305	3.061	ms	"2.642 2.652 2.706 2.767 2.677 2.684 2.682 2.676 2.697 2.649"\n2013-10-13T14:41:03Z	801	3.8122	true	-3.168	10.792	ms	"3.552 3.527 3.642 3.574 3.491 3.557 3.61 3.662 5.685 3.822"\n2013-10-13T14:41:03Z	1001	4.5166	true	3.817	5.217	ms	"4.437 4.581 4.472 4.595 4.505 4.426 4.489 4.482 4.575 4.604"\n2013-10-13T14:41:03Z	1201	5.435099999999999	true	4.935	5.935	ms	"5.486 5.387 5.433 5.453 5.403 5.388 5.44 5.431 5.536 5.394"\n2013-10-13T14:41:03Z	1401	6.5069	true	4.394	8.620	ms	"6.463 6.457 6.639 6.463 6.378 6.391 6.45 6.353 6.44 7.035"\n2013-10-13T14:41:03Z	1601	7.821899999999999	true	-4.710	20.354	ms	"7.383 7.522 7.444 7.56 7.463 7.521 7.398 7.349 7.368 11.211"\n2013-10-13T14:41:03Z	1801	8.936899999999998	true	-8.492	26.366	ms	"8.31 8.418 8.548 8.512 8.465 8.345 8.386 8.369 8.362 13.654"\n2013-10-13T14:41:18Z	1	0.055299999999999995	true	-0.196	0.306	ms	"0.045 0.045 0.045 0.048 0.048 0.048 0.049 0.049 0.053 0.123"\n2013-10-13T14:41:18Z	201	0.8744	true	0.174	1.575	ms	"0.91 0.924 1.021 0.82 0.825 0.913 0.825 0.822 0.824 0.86"\n2013-10-13T14:41:18Z	401	1.6322000000000003	true	1.304	1.960	ms	"1.644 1.644 1.609 1.643 1.613 1.707 1.611 1.605 1.607 1.639"\n2013-10-13T14:41:18Z	601	2.4246	true	1.996	2.853	ms	"2.413 2.408 2.408 2.422 2.446 2.389 2.412 2.533 2.412 2.403"\n2013-10-13T14:41:18Z	801	3.2902	true	2.326	4.255	ms	"3.337 3.226 3.304 3.517 3.26 3.283 3.306 3.183 3.263 3.223"\n2013-10-13T14:41:18Z	1001	4.103199999999999	true	3.087	5.119	ms	"4.07 4.313 4.197 3.987 4.086 4.154 4.054 4.111 4.048 4.012"\n2013-10-13T14:41:18Z	1201	5.2598	true	3.603	6.917	ms	"5.196 5.371 5.168 5.587 5.213 5.189 5.318 5.336 5.234 4.986"\n2013-10-13T14:41:18Z	1401	6.3775	true	-10.450	23.205	ms	"5.759 5.768 5.931 5.947 5.755 5.873 5.835 5.866 10.926 6.115"\n2013-10-13T14:41:18Z	1601	7.4472	true	-6.645	21.539	ms	"9.067 7.038 7.06 6.78 6.748 6.736 6.819 6.807 6.73 10.687"\n2013-10-13T14:41:18Z	1801	7.7492	true	6.103	9.395	ms	"7.586 7.758 7.915 7.613 7.72 7.95 7.901 7.518 7.643 7.888"\n'];
  parent[my.name] = my;
  return parent;
})(ScalaMeter || {});

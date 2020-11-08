const schema = {
  type: "object",
  properties: {
    data: {
      type: "array",
      items: [
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "integer"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "integer"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "integer"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "integer"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "integer"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "integer"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "integer"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "integer"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "integer"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "integer"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "integer"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "integer"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "integer"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "integer"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "integer"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "integer"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "integer"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "integer"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "number"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "integer"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "number"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "integer"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "number"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "number"
            },
            low_temp: {
              type: "integer"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "number"
            },
            min_temp: {
              type: "integer"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        },
        {
          type: "object",
          properties: {
            moonrise_ts: {
              type: "integer"
            },
            wind_cdir: {
              type: "string"
            },
            rh: {
              type: "integer"
            },
            pres: {
              type: "number"
            },
            high_temp: {
              type: "number"
            },
            sunset_ts: {
              type: "integer"
            },
            ozone: {
              type: "number"
            },
            moon_phase: {
              type: "number"
            },
            wind_gust_spd: {
              type: "number"
            },
            snow_depth: {
              type: "integer"
            },
            clouds: {
              type: "integer"
            },
            ts: {
              type: "integer"
            },
            sunrise_ts: {
              type: "integer"
            },
            app_min_temp: {
              type: "integer"
            },
            wind_spd: {
              type: "number"
            },
            pop: {
              type: "integer"
            },
            wind_cdir_full: {
              type: "string"
            },
            slp: {
              type: "number"
            },
            moon_phase_lunation: {
              type: "number"
            },
            valid_date: {
              type: "string"
            },
            app_max_temp: {
              type: "integer"
            },
            vis: {
              type: "number"
            },
            dewpt: {
              type: "number"
            },
            snow: {
              type: "integer"
            },
            uv: {
              type: "number"
            },
            weather: {
              type: "object",
              properties: {
                icon: {
                  type: "string"
                },
                code: {
                  type: "integer"
                },
                description: {
                  type: "string"
                }
              },
              required: ["icon", "code", "description"]
            },
            wind_dir: {
              type: "integer"
            },
            max_dhi: {
              type: "null"
            },
            clouds_hi: {
              type: "integer"
            },
            precip: {
              type: "integer"
            },
            low_temp: {
              type: "number"
            },
            max_temp: {
              type: "number"
            },
            moonset_ts: {
              type: "integer"
            },
            datetime: {
              type: "string"
            },
            temp: {
              type: "integer"
            },
            min_temp: {
              type: "integer"
            },
            clouds_mid: {
              type: "integer"
            },
            clouds_low: {
              type: "integer"
            }
          },
          required: [
            "moonrise_ts",
            "wind_cdir",
            "rh",
            "pres",
            "high_temp",
            "sunset_ts",
            "ozone",
            "moon_phase",
            "wind_gust_spd",
            "snow_depth",
            "clouds",
            "ts",
            "sunrise_ts",
            "app_min_temp",
            "wind_spd",
            "pop",
            "wind_cdir_full",
            "slp",
            "moon_phase_lunation",
            "valid_date",
            "app_max_temp",
            "vis",
            "dewpt",
            "snow",
            "uv",
            "weather",
            "wind_dir",
            "max_dhi",
            "clouds_hi",
            "precip",
            "low_temp",
            "max_temp",
            "moonset_ts",
            "datetime",
            "temp",
            "min_temp",
            "clouds_mid",
            "clouds_low"
          ]
        }
      ]
    },
    city_name: {
      type: "string"
    },
    lon: {
      type: "string"
    },
    timezone: {
      type: "string"
    },
    lat: {
      type: "string"
    },
    country_code: {
      type: "string"
    },
    state_code: {
      type: "string"
    }
  },
  required: [
    "data",
    "city_name",
    "lon",
    "timezone",
    "lat",
    "country_code",
    "state_code"
  ]
};

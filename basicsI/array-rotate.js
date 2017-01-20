function rotateUsingArray(arr, k) {
    // time O(n) space O(n)
    var subArr = [];
    for (var i = 0; i < arr.length; i++) {
        subArr[i] = arr[i];
    }

    for (var i = 0; i < arr.length; i++) {
        arr[(i + k) % arr.length] = subArr[i];
    }
}

function rotateOneAtTime(arr, k) {
    // time O(n) space O(1)
    for (var i = 0; i < k; i += 1) {
        _rotate(arr);
    }

    function _rotate(arr) {
        var j, temp = arr[arr.length - 1];
        for (j = arr.length - 1; j > 0; j -= 1) {
            arr[j] = arr[j - 1];
        }
        arr[0] = temp;
    }
}

function rotateReverse(arr, k) {
    // time O(n) space O(n)
    k %= arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);

    function reverse(arr, start, end) {
        while (start < end) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}

// function rotateGCD(arr, k) {
    
//     var n = arr.length,
//         hcf = gcd(k, n),
//         temp, j, m, i;

//     for (i = 0; i < hcf; i++) {
//         temp = arr[i];
//         j = i;
//         while (1) {
//             m = j + k;
//             if (m >= n) { m = m - n; }
//             if (m === i) {
//                 break;
//             }
//             arr[j] = arr[m];
//             j = m;
//         }
//         arr[j] = temp;
//     }

//     function gcd(p, q) {
//         if (q === 0) {
//             return p;
//         } else {
//             return gcd(q, p % q);
//         }
//     }
// }


//  runner
var a = [1, 2, 3, 4, 5, 6];

// rotateUsingArray(a,2);
// rotateOneAtTime(a,2);
// rotateReverse(a,2);
// rotateGCD(a, 2);

console.log(a);

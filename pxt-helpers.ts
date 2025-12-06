namespace Math {
    export const OneSixth = 0.16666666666;
    export const Half = 0.5;
    export const Infinity = 1 / 0;

    /**
     * Returns the pythagorean theorem of a number 
     * @param a A number expression 
     * @param b A number expression
     */
    //% blockId="math_pythgoreanTheorem"
    //% block="pythagorean theorem %a %b"
    export function pythagoreanTheorem(a: number, b: number): number {
        return Math.sqrt(a * a + b * b)
    }

    /**
     * Returns the quadratic formula of a number 
     * @param a A number 
     * @param b A number 
     * @param c A number
     */
    //% blockId="math_quadratic_formula"
    //% block="quadratic formula %a %b %c"
    export function quadraticFormula(a: number, b: number, c: number): [number, number] {
        let discriminant = Math.sqrt(b * b - 4 * a * c);
        return [(-b + discriminant) / (2 * a), (-b - discriminant) / (2 * a)]
    }

    /**
     * Returns the angle of the number 
     @param angleDeg A number 
     */
    //% blockId="math_get_angle"
    //% block="get angle %angleDeg"
    export function getAngle(angleDeg: number): { x: number, y: number } {
        let rad = angleDeg * Math.PI / 180
        return {
            x: Math.cos(rad),
            y: Math.sin(rad)
        }
    }

    /**
     * @returns — the arc length of the number
     @param circ A number
     */
    //% blockId="math_arc"
    //% block="arc %circ"
    export function arc(circ: number): number {
        return (Math.OneSixth * circ)
    }

    /**
     * Returns the circumfrence of a number 
     * @param r A number
     */
    //% blockId="math_circumfrence"
    //% block="circumfrence %r"
    export function circumfrence(r: number): number {
        return 2 * Math.PI * r
    }

    /** 
     * @returns — the degrees of the number 
     @param degrees A number
     */
    //% blockId="math_get_degrees"
    //% block="get degrees %radians"
    export function getDegrees(radians: number): number {
        return radians * (180 / Math.PI)
    }

    /**
  * @returns — the radians of the number
  @param radians A number
  */
  //% blockId="math_get_radians"
  //% block="get radians %degree"
    export function getRadians(degree: number): number {
        return degree * (Math.PI / 180)
    }

    /**
     * @returns the cotangent of the number
     * @param x A number
     */
    //% blockId="Math_cot"
    //% block="cot %x"
    //% shim=Math_::cot
    export function cot(x: number): number {
        return Math.tan(x) / 1
    }

    /**
    * @returns the secant of the number
    * @param x A number
    */
    //% blockId="Math_sec"
    //% block="sec %x"
    export function sec(x: number): number {
        return Math.cos(x) / 1
    }

    /**
     * @returns the cosescant of the number 
     * @param x A number
     */
    //% blockId="Math_csc"
    //% block="csc %x"
    export function csc(x: number): number {
        return Math.sin(x) / 1
    }

    /**
     * @returns the same as the pythagorean theorem
     */
    //% blockId="Math_magnitude" block="magnitude %dx %dy"
    export function magnitude(dx: number, dy: number): number {
      return Math.sqrt(dx ** 2 + dy ** 2)
    }

    /**
     * @returns — a random boolean value
     */
    //% blockId="math_random_boolean"
    //% block="random boolean"
    export function randomBool(): boolean {
        const fastRandom = new Math.FastRandom();
        return fastRandom.randomBool()
    }
}

//% advanced=true
namespace Math.helpers {
    /**
     * Returs the bit as a interger signed bit 32
     */
    //% blockId="math_helpers_int_32"
    //% block="get int 32 %v"
    export function getInt32(v: number): int32 {
     return (v as any as int32); // gets the real int for the editor
    }

    /**
 * returns the base-10 logarithm log10(x) for a given value of x.
 * @param x A number.
 */
    //% block="log base 10 of %x"
    //% x.defl=1
    export function log10(x: number): number {
        return Math.log(x) / Math.log(10);
    }
}

declare namespace Math {
    // for internal functions now public for users to use 
    //% shim=Math_::atan blockId="math_atan"
    //% block="atan %x"
    /**
Returns the arctangent (in radians) of a number
* @param x A number
     */
     function atan(x: number): number;

    // for internal functions now public for users to use 
    //% shim=Math_::log blockId="math_log"
    //% block="log %x"
    /**
Returns the natural logarithm (base e) of a number.
     */
    function log(x: number): number;
     // for internal functions now public for users to use 
    //% shim=Math_::exp blockId="math_exp"
    //% block="exp %x"
   /**
    * Returns returns e^x.
@param x — A number
    */
    function exp(x: number): number;
} 

/**
 * PXT
 */
namespace Math {
    // the reason why we are not using std namespace and c++
    // because we cannot use c++ as native shims 
    // and third part also because of  simulator implementations of C++ functions cannot be worked in the 
    // makecode editor for secuity reasons for safety
    // see issue at https://github.com/microsoft/pxt-arcade/issues/7224

    // to really get int32 in the web editor we have
    // to make v as any converted to int32 so the editor
    // will not have any runtime errors for the code
    // that is the reason why you get this error right here 
    // pxsim_<namespace>.<fn> is not a function even though implemented in c++

    // we will use the native shim even though it does not exist in c++ because it does already have code working it could just make the runtime think it is in the runtime but when really calling it is actually still in the same file we are using right now
    // this will get exposed in Math's runtime methods later but for now private
    function getInt32(v: number): int32 {
        return (v as any as int32); // gets the real int for the editor
    } // getInt32

    /**
     * The first number
    Returns the value of integer signed 32 bit addition of two numbers
     */
    //% shim=Math_::iadd 
    // it is not really exist it just thinks it is builtin already just for making it exposed as a core function
    //% blockId="math_iadd" block="%x interger + %y"
    //% weight=50
    export function iadd(x: number, y: number): number {
        return (getInt32(x) + getInt32(y))
    }

    /**
     * The first number
    
    Returns the value of integer signed 32 bit subtraction of two numbers
     */
    //% shim=Math_::sub
    //% blockId="math_isub" block="%x interger - %y"
    //% weight=49
    export function isub(x: number, y: number): number {
        return (getInt32(x) - getInt32(y))
    }
}

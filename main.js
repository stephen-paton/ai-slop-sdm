// START - NoteLetter
class NoteLetter {
    static F = Symbol();
    static C = Symbol();
    static G = Symbol();
    static D = Symbol();
    static A = Symbol();
    static E = Symbol();
    static B = Symbol();
}

class NoteLetter__FollowUpAction {
    static None = Symbol();
    static Sharpen = Symbol();
    static Flatten = Symbol();
}

function NoteLetter__next(letter, iterations = 1) {
    const output = {
        letter: letter,
        follow_up_action: NoteLetter__FollowUpAction.None,
    };

    const capped_iterations = iterations % 7;

    if (capped_iterations === 0 && iterations !== 0) {
        output.follow_up_action = NoteLetter__FollowUpAction.Sharpen;
    } else if (capped_iterations === 1) {
        switch (output.letter) {
            case NoteLetter.F:
                output.letter = NoteLetter.C;
                break;
            case NoteLetter.C:
                output.letter = NoteLetter.G;
                break;
            case NoteLetter.G:
                output.letter = NoteLetter.D;
                break;
            case NoteLetter.D:
                output.letter = NoteLetter.A;
                break;
            case NoteLetter.A:
                output.letter = NoteLetter.E;
                break;
            case NoteLetter.E:
                output.letter = NoteLetter.B;
                break;
            case NoteLetter.B:
                output.letter = NoteLetter.F;
                output.follow_up_action = NoteLetter__FollowUpAction.Sharpen;
                break;
        }
    } else if (capped_iterations > 1) {
        let temp_follow_up_action;

        for (let i = 1; i <= capped_iterations; i++) {
            const result = NoteLetter__next(output.letter)
            output.letter = result.letter;
            if (result.follow_up_action === NoteLetter__FollowUpAction.Sharpen) output.follow_up_action = result.follow_up_action;
        }
    }

    return output;
}

function NoteLetter__prev(letter, iterations = 1) {
    const output = {
        letter: letter,
        follow_up_action: NoteLetter__FollowUpAction.None,
    };

    const capped_iterations = iterations % 7;

    if (capped_iterations === 0 && iterations !== 0) {
        output.follow_up_action = NoteLetter__FollowUpAction.Flatten;
    } else if (capped_iterations === 1) {
        switch (output.letter) {
            case NoteLetter.F:
                output.letter = NoteLetter.B;
                output.follow_up_action = NoteLetter__FollowUpAction.Flatten;
                break;
            case NoteLetter.C:
                output.letter = NoteLetter.F;
                break;
            case NoteLetter.G:
                output.letter = NoteLetter.C;
                break;
            case NoteLetter.D:
                output.letter = NoteLetter.G;
                break;
            case NoteLetter.A:
                output.letter = NoteLetter.D;
                break;
            case NoteLetter.E:
                output.letter = NoteLetter.A;
                break;
            case NoteLetter.B:
                output.letter = NoteLetter.E;
                break;
        }
    } else if (capped_iterations > 1) {
        let temp_follow_up_action;
        
        for (let i = 1; i <= capped_iterations; i++) {
            const result = NoteLetter__prev(output.letter)
            output.letter = result.letter;
            if (result.follow_up_action === NoteLetter__FollowUpAction.Flatten) output.follow_up_action = result.follow_up_action;
        }
    }

    return output;
}
// END - NoteLetter

// START - Accidental
class Accidental {
    static TripleFlat = -3;
    static DoubleFlat = -2;
    static Flat = -1;
    static Natural = 0;
    static Sharp = 1;
    static DoubleSharp = 2;
    static TripleSharp = 3;
}

function Accidental__sharpened(accidental) {
    const output = {
        accidental: accidental + Accidental.Sharp,
    };

    return output;
}

function Accidental__flattened(accidental) {
    const output = {
        accidental: accidental + Accidental.Flat,
    };

    return output;
}
// END - Accidental

// START - ScaleDegree
function ScaleDegree__1() {
    const output = {
        base: 1,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__2b() {
    const output = {
        base: 2,
        accidental: Accidental.Flat,
    };

    return output;
}

function ScaleDegree__2() {
    const output = {
        base: 2,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__3b() {
    const output = {
        base: 3,
        accidental: Accidental.Flat,
    };

    return output;
}

function ScaleDegree__3() {
    const output = {
        base: 3,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__4() {
    const output = {
        base: 4,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__4s() {
    const output = {
        base: 4,
        accidental: Accidental.Sharp,
    };

    return output;
}

function ScaleDegree__5b() {
    const output = {
        base: 5,
        accidental: Accidental.Flat,
    };

    return output;
}

function ScaleDegree__5() {
    const output = {
        base: 5,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__5s() {
    const output = {
        base: 5,
        accidental: Accidental.Sharp,
    };

    return output;
}

function ScaleDegree__6b() {
    const output = {
        base: 6,
        accidental: Accidental.Flat,
    };

    return output;
}

function ScaleDegree__6() {
    const output = {
        base: 6,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__7b() {
    const output = {
        base: 7,
        accidental: Accidental.Flat,
    };

    return output;
}

function ScaleDegree__7() {
    const output = {
        base: 7,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__8() {
    const output = {
        base: 8,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__9b() {
    const output = {
        base: 9,
        accidental: Accidental.Flat,
    };

    return output;
}

function ScaleDegree__9() {
    const output = {
        base: 9,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__9s() {
    const output = {
        base: 9,
        accidental: Accidental.Sharp,
    };

    return output;
}

function ScaleDegree__11() {
    const output = {
        base: 11,
        accidental: Accidental.Natural,
    };

    return output;
}

function ScaleDegree__11s() {
    const output = {
        base: 11,
        accidental: Accidental.Sharp,
    };

    return output;
}

function ScaleDegree__13b() {
    const output = {
        base: 13,
        accidental: Accidental.Flat,
    };

    return output;
}

function ScaleDegree__13() {
    const output = {
        base: 13,
        accidental: Accidental.Natural,
    };

    return output;
}
// END - ScaleDegree

// START - Note
function Note__relative(root, scale_degree) {
    const output = {
        note: null,
    };

    let capped_scale_degree_base = scale_degree.base;

    if (capped_scale_degree_base > 7) capped_scale_degree_base = (scale_degree.base % 8) + 1;

    let result;

    switch (capped_scale_degree_base) {
        case 1:
            result = NoteLetter__next(root.letter, 0);
            break;
        case 2:
            result = NoteLetter__next(root.letter, 2);
            break;
        case 3:
            result = NoteLetter__next(root.letter, 4);
            break;
        case 4:
            result = NoteLetter__prev(root.letter);
            break;
        case 5:
            result = NoteLetter__next(root.letter);
            break;
        case 6:
            result = NoteLetter__next(root.letter, 3);
            break;
        case 7:
            result = NoteLetter__next(root.letter, 5);
            break;
    }

    output.note = { letter: result.letter, accidental: root.accidental };

    switch (result.follow_up_action) {
        case NoteLetter__FollowUpAction.Sharpen:
            output.note.accidental = Accidental__sharpened(output.note.accidental).accidental;
            break;
        case NoteLetter__FollowUpAction.Flatten:
            output.note.accidental = Accidental__flattened(output.note.accidental).accidental;
            break;
    }

    if (scale_degree.accidental < 0) {
        for (let i = scale_degree.accidental; i < 0; i++) output.note.accidental = Accidental__sharpened(output.note.accidental).accidental;
    } else if (scale_degree.accidental > 0) {
        for (let i = 1; i <= scale_degree.accidental; i++) output.note.accidental = Accidental__flattened(output.note.accidental).accidental;
    }

    return output;
}

function Note__C() {
    const output = {
        note: {
            letter: NoteLetter.C,
            accidental: Accidental.Natural,
        },
    };

    return output;
}

function Note__G() {
    const output = {
        note: {
            letter: NoteLetter.G,
            accidental: Accidental.Natural,
        },
    };

    return output;
}

function Note__D() {
    const output = {
        note: {
            letter: NoteLetter.D,
            accidental: Accidental.Natural,
        },
    };

    return output;
}

function Note__A() {
    const output = {
        note: {
            letter: NoteLetter.A,
            accidental: Accidental.Natural,
        },
    };

    return output;
}

function Note__E() {
    const output = {
        note: {
            letter: NoteLetter.E,
            accidental: Accidental.Natural,
        },
    };

    return output;
}

function Note__B() {
    const output = {
        note: {
            letter: NoteLetter.B,
            accidental: Accidental.Natural,
        },
    };

    return output;
}

function Note__Fs() {
    const output = {
        note: {
            letter: NoteLetter.F,
            accidental: Accidental.Sharp,
        },
    };

    return output;
}

function Note__Cs() {
    const output = {
        note: {
            letter: NoteLetter.C,
            accidental: Accidental.Sharp,
        },
    };

    return output;
}

function Note__Cb() {
    const output = {
        note: {
            letter: NoteLetter.C,
            accidental: Accidental.Flat,
        },
    };

    return output;
}

function Note__Gb() {
    const output = {
        note: {
            letter: NoteLetter.G,
            accidental: Accidental.Flat,
        },
    };

    return output;
}

function Note__Db() {
    const output = {
        note: {
            letter: NoteLetter.D,
            accidental: Accidental.Flat,
        },
    };

    return output;
}

function Note__Ab() {
    const output = {
        note: {
            letter: NoteLetter.A,
            accidental: Accidental.Flat,
        },
    };

    return output;
}

function Note__Eb() {
    const output = {
        note: {
            letter: NoteLetter.E,
            accidental: Accidental.Flat,
        },
    };

    return output;
}

function Note__Bb() {
    const output = {
        note: {
            letter: NoteLetter.B,
            accidental: Accidental.Flat,
        },
    };

    return output;
}

function Note__F() {
    const output = {
        note: {
            letter: NoteLetter.F,
            accidental: Accidental.Natural,
        },
    };

    return output;
}
// END - Note

// START - Key
function Key__major(root) {
    const output = {
        key: [
            Note__relative(root, ScaleDegree__1()).note,
            Note__relative(root, ScaleDegree__2()).note,
            Note__relative(root, ScaleDegree__3()).note,
            Note__relative(root, ScaleDegree__4()).note,
            Note__relative(root, ScaleDegree__5()).note,
            Note__relative(root, ScaleDegree__6()).note,
            Note__relative(root, ScaleDegree__7()).note,
        ],
    };

    return output;
}
// END - Key

import React from 'react';
import { G, Path, Polygon, Circle } from 'react-native-svg'

export default {
    SortArrows: <G><Path d="M0 45h90L45 0 0 45z"/><Path d="M0 55h90l-45 45L0 55z"/></G>,
    Tick: {
        svg: <Path d="M38.729 75.688a4.48 4.48 0 0 1-3.21-1.356L16.558 55.004c-1.774-1.807-1.774-4.736-.001-6.543a4.48 4.48 0 0 1 6.42 0l15.753 16.056 37.749-38.474a4.478 4.478 0 0 1 6.419 0c1.773 1.806 1.773 4.736 0 6.543L41.939 74.332a4.48 4.48 0 0 1-3.21 1.356z"/>,
        viewBox: '0 0 50 50',
    },
    Triangle : {
        svg: <G> <Polygon points="58,58 0,58 29,0 29,0 	"/> </G>,
        viewBox: "0 0 58 58",
    },
    TriangleEmpty: {
        svg: <Path d="M59.895,58.531l-29-58c-0.34-0.678-1.449-0.678-1.789,0l-29,58c-0.155,0.31-0.139,0.678,0.044,0.973 C0.332,59.798,0.654,59.978,1,59.978h58c0.347,0,0.668-0.18,0.851-0.474C60.033,59.209,60.05,58.841,59.895,58.531z M2.618,57.978 L30,3.214l27.382,54.764H2.618z"/>,
        viewBox: "0 0 60.001 60.001",
    },
    Circle: {
        svg: <Circle cx="29" cy="29" r="29"/>,
        viewBox: "0 0 58 58",
    },
    CircleEmpty: {
        svg: <Path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>,
        viewBox: "0 0 60 60",
    }
}

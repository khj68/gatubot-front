import React, { useState, useEffect, useRef } from 'react';

export function isEmail(asValue: string) {

	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	

}

export function isPhoneNumber(asValue: string) {

	var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴

}


export function isPassword(asValue: string) {

	var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; //  8 ~ 16자 영문, 숫자 조합

	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴

}

export function toPhoneNumber(value: string) {
	return value.substr(0, 3) + "-" + value.substr(3, 4) + "-" + value.substr(7,4);
}

export function toMoney(money: string) {
	return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toDate(date: Date) {
	const year = date.getFullYear();
	let month: string | number = (1 + date.getMonth());
	month = month >= 10 ? month : "0" + month;
	let day: string | number = date.getDate();
	day = day >= 10 ? day : "0" + day;
	return year + "-" + month + "-" + day;
}

export function toDong(address: string) {
	// console.log("[LOG] toDong : ", address, address.match(/\(\S+[\,|\)]/));
	return address.match(/\(\S+[\,|\)]/)!![0].slice(1, -1);
}

export function toSimpleAddress(address: string) {
	return address.match(/.*\(/)!![0].slice(0, -2);
}

export function toKoreanDateTime(newDate: any) {
	if(newDate === null) return ""
	let date: Date;
	if(typeof newDate === "object")
		date = new Date(newDate[0], newDate[1], newDate[2], newDate[3], newDate[4]);
	else 
		date = new Date(newDate+"+09:00");
	const year = date.getFullYear();
	let month: string | number = (1 + date.getMonth());
	month = month >= 10 ? month : "0" + month;
	let day: string | number = date.getDate();
	day = day >= 10 ? day : "0" + day;
	let hour: string | number = date.getHours();
	hour = hour >= 10 ? hour : "0" + hour;
	let minute: string | number = date.getMinutes();
	minute = minute >= 10 ? minute : "0" + minute;
	return `${year}.${month}.${day} ${hour}:${minute}`;
}

export function toTimeWithoutYear(newDate: string) {
	if(newDate === null) return ""
	const date = new Date(newDate+"+09:00");
	let month: string | number = (1 + date.getMonth());
	month = month >= 10 ? month : "0" + month;
	let day: string | number = date.getDate();
	day = day >= 10 ? day : "0" + day;
	let hour: string | number = date.getHours();
	hour = hour >= 10 ? hour : "0" + hour;
	let minute: string | number = date.getMinutes();
	minute = minute >= 10 ? minute : "0" + minute;
	return `${month}.${day} ${hour}:${minute}`;
}

export function toTime(newDate: string) {
	if(newDate === null) return ""
	const date = new Date(newDate+"+09:00");
	let hour: string | number = date.getHours();
	hour = hour >= 10 ? hour : "0" + hour;
	let minute: string | number = date.getMinutes();
	minute = minute >= 10 ? minute : "0" + minute;
	return `${hour}:${minute}`;
}

export function toKoreanDate(newDate: string) {
	const date = new Date(newDate+"+09:00");
	const year = date.getFullYear();
	let month: string | number = (1 + date.getMonth());
	month = month >= 10 ? month : "0" + month;
	let day: string | number = date.getDate();
	day = day >= 10 ? day : "0" + day;
	let hour: string | number = date.getHours();
	hour = hour >= 10 ? hour : "0" + hour;
	let minute: string | number = date.getMinutes();
	minute = minute >= 10 ? minute : "0" + minute;
	return `${year}.${month}.${day}`;
}

export function lastWeek() {
	const d = new Date();
  const dayOfMonth = d.getDate();
  d.setDate(dayOfMonth - 7);
  return d;
}

export const binArrayToJson = function(binArray: any) {
	let str = "";
	for (let i = 0; i < binArray.length; i++) {
		str += String.fromCharCode(parseInt(binArray[i]));
	}
	return JSON.parse(str)
}

export function getStringUTF8(dataview: any, offset: any) {
	var s = '';
	const length = dataview.length;
	for (var i = 0, c; i < length;) {
			c = dataview[offset + i++];
			s += String.fromCharCode(
					c > 0xdf && c < 0xf0 && i < length - 1
					? (c & 0xf) << 12 | (dataview[offset + i++] & 0x3f) << 6 
					| dataview[offset + i++] & 0x3f
					: c > 0x7f && i < length
					? (c & 0x1f) << 6 | dataview[offset + i++] & 0x3f
					: c
			);
	}
	
	return s;
}

export function getDistance(startX: number, startY: number, endX: number, endY: number) {
	const distance = Math.sqrt(
										Math.pow( (Math.cos(startY)*5425*2*3.14/360) * Math.abs(startX - endX), 2) 
									+ Math.pow( 110.9 * Math.abs(startY - endY), 2))
	return Math.round(distance * 10) / 10
}

export function serializeTime(obj: any) {
	console.log(new Date(obj.year, obj.monthValue, obj.day, obj.hour, obj.minute, obj.second));
	return new Date(obj.year, obj.monthValue, obj.day, obj.hour, obj.minute, obj.second);
	// `${timeObj.year}-${timeObj.monthValue}-${timeObj.day}T${timeObj.hour}:${timeObj.minute}:${timeObj.second}`
}

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

  }, [delay]);
}


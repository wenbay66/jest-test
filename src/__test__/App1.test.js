import App1 from '../pages/App1';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App1.test.js 測試', () => {
  
  test('測試頁面上是否存在 testBtn', () => {
  
    render(<App1/>);
  
    // 寫法1
    const button1 = screen.getByRole('button', {name: /testBtn/i});
  
    // 寫法2
    const button2 = screen.getByRole('button', {name: 'testBtn'});
  
    expect(button1).toBeInTheDocument();
  });
  
  test('測試 testBtn 在 click 前是紅色className，click 後變藍色className', () => {
  
    render(<App1/>);
  
    const button = screen.getByRole('button', {name: /testBtn/i});
  
    // click 按鈕前是紅色背景
    expect(button).toHaveClass('bg_red');
  
    userEvent.click(button);
  
    // click 按鈕後背景變藍色
    expect(button).toHaveClass('bg_blue');
  
  });
  
});
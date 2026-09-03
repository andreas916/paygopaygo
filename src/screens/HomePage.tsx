import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import { 
  ChevronRight, 
  Eye, 
  EyeOff, 
  PlusCircle, 
  ArrowDownCircle, 
  HelpCircle, 
  Send, 
  Smartphone, 
  Zap, 
  Bike, 
  CreditCard, 
  Grid, 
  BarChart2, 
  Utensils, 
  Sparkles,
  ShieldCheck,
  Tag
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { state, goToScreen, setReportTab, simulateGoFoodTransaction } = useBudget();
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div style={{ paddingBottom: '90px', background: '#0e1216', minHeight: '100%' }}>
      {/* Top GoPay Blue Header Section */}
      <div 
        style={{
          background: 'linear-gradient(180deg, #007d9c 0%, #00607a 65%, #0e1216 100%)',
          padding: '12px 18px 24px 18px',
          position: 'relative'
        }}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '7px',
                  background: '#00aed6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '14px',
                  color: '#ffffff'
                }}
              >
                G
              </div>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.4px' }}>
                gopay
              </span>
            </div>

            {/* Security Pill */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: 'rgba(0, 0, 0, 0.25)',
                padding: '4px 10px',
                borderRadius: '999px',
                fontSize: '11px',
                color: '#e2e8f0',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <span style={{ background: '#f97316', color: '#fff', fontSize: '9px', fontWeight: 800, padding: '1px 5px', borderRadius: '4px' }}>
                80%
              </span>
              <span>Akun perlu diamankan</span>
              <ChevronRight size={12} />
            </div>
          </div>

          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HelpCircle size={18} color="#ffffff" />
          </div>
        </div>

        {/* Balance & Action Area */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.85)' }}>Rp</span>
              <span style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>
                {showBalance ? state.mainBalance.toLocaleString('id-ID') : '••••••••'}
              </span>
              <button 
                onClick={() => setShowBalance(!showBalance)}
                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 600 }}>
              0 Coins
            </div>
          </div>

          {/* Action Buttons: Top Up & Tarik Tunai */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div 
              style={{
                width: '74px',
                height: '58px',
                background: 'rgba(14, 46, 60, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              <PlusCircle size={20} color="#38bdf8" />
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>Top up</span>
            </div>

            <div 
              style={{
                width: '74px',
                height: '58px',
                background: 'rgba(14, 46, 60, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              <ArrowDownCircle size={20} color="#38bdf8" />
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>Tarik Tunai</span>
            </div>
          </div>
        </div>

        {/* PRIMARY HERO CALLOUT: Monthly Spending Pill (Navigates to Financial Report!) */}
        <div 
          onClick={() => {
            setReportTab('expense');
            goToScreen('report');
          }}
          style={{
            background: 'rgba(6, 28, 38, 0.9)',
            border: '1.5px solid #00aed6',
            borderRadius: '16px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            boxShadow: '0 4px 18px rgba(0, 174, 214, 0.25)',
            marginBottom: '14px',
            transition: 'transform 0.15s ease'
          }}
          title="Klik untuk membuka Laporan Keuangan (Budget & Spend)"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'rgba(0, 174, 214, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00aed6'
              }}
            >
              <BarChart2 size={16} />
            </div>
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff' }}>
                Rp{state.totalSpent.toLocaleString('id-ID')} sudah terpakai di Sep...
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#00aed6', fontSize: '11px', fontWeight: 700 }}>
            <span>Buka</span>
            <ChevronRight size={14} />
          </div>
        </div>

        {/* Quick Chips: Pinjam & GoPay Later */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(10, 36, 48, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '6px 12px',
              borderRadius: '999px',
              fontSize: '11px',
              color: '#38bdf8',
              fontWeight: 600,
              whiteSpace: 'nowrap'
            }}
          >
            <Sparkles size={13} color="#38bdf8" />
            <span>Aktifin Pinjam</span>
            <ChevronRight size={12} />
          </div>

          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(10, 36, 48, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '6px 12px',
              borderRadius: '999px',
              fontSize: '11px',
              color: '#38bdf8',
              fontWeight: 600,
              whiteSpace: 'nowrap'
            }}
          >
            <ShieldCheck size={13} color="#38bdf8" />
            <span>Aktifin GoPay Later</span>
            <ChevronRight size={12} />
          </div>
        </div>
      </div>

      {/* Dark Body Container */}
      <div style={{ padding: '0 16px', marginTop: '10px' }}>
        {/* 8-Grid Services Icons */}
        <div 
          style={{
            background: '#181d24',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            padding: '16px 12px',
            marginBottom: '16px'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px 8px', textAlign: 'center' }}>
            {/* 1. Transfer gratis */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '18px', background: '#1c2633', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Send size={22} color="#00aed6" />
                </div>
                <span style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', background: '#00aa13', color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '1px 4px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                  MURAAAH
                </span>
              </div>
              <span style={{ fontSize: '10.5px', color: '#cbd5e1', fontWeight: 500, lineHeight: 1.2 }}>Transfer<br />gratis</span>
            </div>

            {/* 2. Paket Data */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '18px', background: '#26221c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Smartphone size={22} color="#f59e0b" />
                </div>
                <span style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', background: '#00aa13', color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '1px 4px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                  MURAAAH
                </span>
              </div>
              <span style={{ fontSize: '10.5px', color: '#cbd5e1', fontWeight: 500, lineHeight: 1.2 }}>Paket<br />Data</span>
            </div>

            {/* 3. Pulsa */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '18px', background: '#1c2633', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Tag size={22} color="#38bdf8" />
                </div>
                <span style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', background: '#00aa13', color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '1px 4px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                  MURAAAH
                </span>
              </div>
              <span style={{ fontSize: '10.5px', color: '#cbd5e1', fontWeight: 500 }}>Pulsa</span>
            </div>

            {/* 4. PLN */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '18px', background: '#2d2817', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={22} color="#eab308" />
                </div>
                <span style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', background: '#00aa13', color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '1px 4px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                  MURAAAH
                </span>
              </div>
              <span style={{ fontSize: '10.5px', color: '#cbd5e1', fontWeight: 500 }}>PLN</span>
            </div>

            {/* 5. GoPay Pet */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '18px', background: '#261e2b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={22} color="#d946ef" />
                </div>
                <span style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: '#000', fontSize: '7.5px', fontWeight: 900, padding: '1px 4px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                  HADIAH 1JT
                </span>
              </div>
              <span style={{ fontSize: '10.5px', color: '#cbd5e1', fontWeight: 500 }}>GoPay Pet</span>
            </div>

            {/* 6. Top up e-money */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '18px', background: '#291c24', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CreditCard size={22} color="#f43f5e" />
                </div>
                <span style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', background: '#00aa13', color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '1px 4px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                  MURAAAH
                </span>
              </div>
              <span style={{ fontSize: '10.5px', color: '#cbd5e1', fontWeight: 500, lineHeight: 1.2 }}>Top up<br />e-money</span>
            </div>

            {/* 7. Gojek */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '18px', background: '#192b1e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bike size={22} color="#22c55e" />
                </div>
                <span style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', background: '#00aa13', color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '1px 4px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                  MURAAAH
                </span>
              </div>
              <span style={{ fontSize: '10.5px', color: '#cbd5e1', fontWeight: 500 }}>Gojek</span>
            </div>

            {/* 8. Lihat semua */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '18px', background: '#1e242d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid size={22} color="#94a3b8" />
              </div>
              <span style={{ fontSize: '10.5px', color: '#cbd5e1', fontWeight: 500, lineHeight: 1.2 }}>Lihat<br />semua</span>
            </div>
          </div>
        </div>

        {/* Quick Transfer Contacts Row */}
        <div 
          style={{
            background: '#181d24',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            padding: '14px',
            marginBottom: '16px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '15px' }}>
                  D
                </div>
                <span style={{ position: 'absolute', bottom: '-2px', right: '-2px', background: '#005baa', color: '#fff', fontSize: '7px', fontWeight: 800, padding: '1px 3px', borderRadius: '2px' }}>BCA</span>
              </div>
              <span style={{ fontSize: '11px', color: '#e2e8f0', fontWeight: 500 }}>Daniel</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '15px' }}>
                  A
                </div>
                <span style={{ position: 'absolute', bottom: '-2px', right: '-2px', background: '#1d4ed8', color: '#fff', fontSize: '7px', fontWeight: 800, padding: '1px 3px', borderRadius: '2px' }}>Jago</span>
              </div>
              <span style={{ fontSize: '11px', color: '#e2e8f0', fontWeight: 500 }}>Andreas</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '15px' }}>
                  A
                </div>
                <span style={{ position: 'absolute', bottom: '-2px', right: '-2px', background: '#005baa', color: '#fff', fontSize: '7px', fontWeight: 800, padding: '1px 3px', borderRadius: '2px' }}>BCA</span>
              </div>
              <span style={{ fontSize: '11px', color: '#e2e8f0', fontWeight: 500 }}>Achmad</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#262d38', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                <ChevronRight size={20} />
              </div>
              <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>Lainnya</span>
            </div>
          </div>
        </div>

        {/* "Spesial cuma buat kamu" Section */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Spesial cuma buat kamu
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {/* Promo 1 */}
            <div 
              style={{
                background: '#181d24',
                borderRadius: '18px',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                padding: '12px',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', color: '#fff', fontWeight: 800, fontSize: '12px' }}>
                YG
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', marginBottom: '3px' }}>
                Buka Kartu Gosok
              </div>
              <div style={{ fontSize: '10px', color: '#94a3b8' }}>
                Hadiah s.d. 50rb
              </div>
            </div>

            {/* Promo 2: GoFood Simulation Trigger! */}
            <div 
              onClick={simulateGoFoodTransaction}
              style={{
                background: '#181d24',
                borderRadius: '18px',
                border: '1px solid rgba(255, 67, 67, 0.25)',
                padding: '12px',
                cursor: 'pointer'
              }}
              title="Klik untuk mensimulasikan transaksi GoFood"
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', color: '#fff' }}>
                <Utensils size={18} />
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', marginBottom: '3px' }}>
                Nasi ayam mulai 5rb!
              </div>
              <div style={{ fontSize: '10px', color: '#ff7070', fontWeight: 600 }}>
                Pesan GoFood • Simulasikan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
